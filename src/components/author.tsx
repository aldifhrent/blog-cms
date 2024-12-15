"use client";

import { useAuthors } from "@/actions/author";
import { AuthorType } from "@/types/author";
import TextCatalogue from "./text.catalogue";
import Image from "next/image";

const Author = () => {
  const { authors } = useAuthors();
  return (
    <div>
      <TextCatalogue text_first="Top" text_second="Author" />
      <div className="flex flex-col gap-6 w-[500px] mt-10">
        {authors.map((author: AuthorType, _idx) => (
          <div key={_idx} className="flex gap-4 items-center">
            <Image
              src={author.picture.large}
              alt={author.name.title}
              className="rounded-full"
              width={40}
              height={40}
            />
            <p>
              {author.name.first} {author.name.last}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
