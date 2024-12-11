import { client } from "@/lib/client";
import { Entry, EntrySkeletonType } from "contentful";

export const getFeaturedPost = async () => {
  try {
    const entries = await client.getEntries<
      Entry<EntrySkeletonType, undefined, string>[] | undefined
    >({
      content_type: "travel",
    });
    console.log(entries.items);
    return entries.items; // Assuming `items` contains the list of articles
  } catch (error) {
    console.error("Error fetching featured posts:", error);
  }
};

export const getFeaturedMonth = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "travel",
      limit: 2,
    });
    console.log(entries.items);
    return entries.items; // Assuming `items` contains the list of articles
  } catch (error) {
    console.error("Error fetching featured posts:", error);
  }
};
