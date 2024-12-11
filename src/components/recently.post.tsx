"use client";

import { useEffect, useState } from "react";
import TextCatalogue from "./text.catalogue";
import { getFeaturedPost } from "./actions/post";
import RecentlyCard from "./recently.card";
import { Entry, EntrySkeletonType } from "contentful";
import { Post } from "@/types/post";

export default function RecentlyPost() {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedArticles:
        | Entry<EntrySkeletonType, undefined, string>[]
        | undefined = await getFeaturedPost();
      setRecents(fetchedArticles);
    };

    fetchData();
  }, []);
  return (
    <section className="px-4 py-6 lg:px-[152px] mt-20 w-full h-full">
      <div className="flex justify-between gap-20 min-w-[856px] min-h-[458px]">
        <div>
          <TextCatalogue text_first={"Recently"} text_second={"Post"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[56px] mt-[56px]">
            {recents.map((recent: Post, idx: number) => (
              <RecentlyCard
                key={idx}
                categories={recent.fields.categories}
                title={recent.fields.title}
                postCreated={recent.fields.postCreated.toLocaleString()}
                shortDetails={recent.fields.shortDetails}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col ">
          {/* <TopAuthor /> */}
          <TextCatalogue text_first={"Categories"} />
          <TextCatalogue text_first={"Today's"} text_second="Update" />
          <TextCatalogue text_first={"Search "} text_second="With Tags" />
        </div>
      </div>
    </section>
  );
}
