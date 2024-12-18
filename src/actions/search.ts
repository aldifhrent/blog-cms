import { client } from "@/lib/client";
import { searchPost } from "@/types/posts";
import { useEffect, useState } from "react";

export const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [posts, setPosts] = useState<searchPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) {
        setPosts([]);
        setError("");
        return;
      }

      setLoading(true);

      try {
        const data = await client.getEntries({
          content_type: "travel",
          "fields.title[match]": query, // Filter by title match
          limit: 5,
        });

        if (data.items.length > 0) {
          const transformedPosts: searchPost[] = data.items.map((item: any) => ({
            fields: {
              title: item.fields.title,
              slug: item.fields.slug,
              image: item.fields.image?.fields.file.url
            },
          }));
          setPosts(transformedPosts);
        } else {
          setPosts([]);
          setError(`No results found for "${query}"`);
        }
      } catch (err) {
        setPosts([]);
        setError("Error fetching posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return { query, setQuery, posts, loading, error };
};
