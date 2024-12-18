/* eslint-disable @typescript-eslint/no-explicit-any */

import getPost from "@/actions/post";
import { format } from "date-fns";
import FeaturedPostCard from "./featured.post.card";
import TextCatalogue from "../text.catalogue";
import Categories from "../category/categories";

export default async function FeaturedPost() {
  const data = await getPost();
  return (
    <section className="container mt-40 mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between gap-20 w-full min-h-[900px]">
        <div className="flex flex-col w-full">
          <TextCatalogue text_first="Featured" text_second="Post" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[56px] mt-[56px]">
            {data?.map((post: any, _idx: number) => {
              return (
                <FeaturedPostCard
                  key={post.fields.slug || _idx}
                  title={post.fields.title}
                  createdAt={format(
                    new Date(post.fields.createdAt),
                    "dd MMMM yyyy"
                  )}
                  image={post.fields.image.fields.file.url}
                  category={post.fields.category || []}
                  shortDescription={post.fields.shortDescription || ""}
                  slug={post.fields.slug || "#"}
                />
              );
            })}
          </div>
        </div>

        <div className="lg:flex flex-col gap-20">
          <Categories />
        </div>
      </div>
    </section>
  );
}
