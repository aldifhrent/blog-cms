import { client } from "@/lib/client";
import { TypeTravelContentSkeleton } from "@/types/contentful";

export default async function getPost() {
  try {
    const res = await client.getEntries<TypeTravelContentSkeleton>({
      content_type: "travel",
    });
    return res.items;
  } catch (err) {
    console.log(err);
  }
}

export async function getPostById(slug: string) {
  try {
    const response = await client.getEntries<TypeTravelContentSkeleton>({
      content_type: "travel",
      "fields.slug": slug,
      limit: 1,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
