/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";

import { useParams } from "next/navigation";
import { client } from "@/lib/client";
import Header from "@/components/header";
import PostContent from "@/components/post/post.content";
import Loading from "@/app/loading";
import { TypeTravelContentSkeleton } from "@/types/contentful";
import { IPostCardWithFields, IPostCardWithoutFields } from "@/types/posts";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>(); // Access params from Next.js hook
  const [article, setArticle] = useState<IPostCardWithoutFields | null>(null);

  const getArticleBySlug = async () => {
    try {
      const data = await client.getEntries<TypeTravelContentSkeleton>({
        content_type: "travel",
        limit: 1,
        "fields.slug": params.slug,
      });
      if (data.items.length > 0) {
        setArticle(data.items[0].fields);
      } else {
        setArticle(null);
      }
    } catch (err) {
      console.error("Error fetching article:", err);
      setArticle(null); // Handle error dengan mengatur state ke null
    }
  };

  useEffect(() => {
    getArticleBySlug();
  }, []);

  if (!article) {
    return <Loading />;
  }

  // Periksa apakah `article.category` adalah array
  const category =
    Array.isArray(article.category) && article.category.length > 0
      ? article.category || ""
      : typeof article.category === "string"
      ? article.category
      : "";

  return (
    <div>
      <div>
        <Header />
        <PostContent
          title={article.title}
          document={article.body}
          createdAt={article.createdAt} // Gunakan `sys.createdAt` dari Contentful
          image={article.image.fields.file.url}
          imageName={article.image.fields.file.fileName}
          category={category} // Berikan kategori yang sudah diproses
        />
      </div>
    </div>
  );
}
