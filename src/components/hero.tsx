"use client";

import HeroFeaturedPost from "./hero.featured.post";
import TextCatalogue from "./text.catalogue";

export default function Hero() {
  // const { posts } = useFeaturedMonth("travel");
  return (
    <section className="px-4 py-6 lg:px-[152px] mt-20 w-full h-full bg-[#bg-[#F2F8F7]]">
      <div className="flex  gap-20 justify-between min-w-[856px] min-h-[458px]">
        <div className="flex flex-col gap-20">
          <TextCatalogue text_first={"Featured"} text_second={"This Month"} />
          <div className="grid grid-cols-2 gap-[30px]">
            {/* {posts.map((post: TypeTravelFields, idx) => (
              <HeroCardPost key={idx} {...post} />
            ))} */}
          </div>
        </div>
        <HeroFeaturedPost />
      </div>
    </section>
  );
}
