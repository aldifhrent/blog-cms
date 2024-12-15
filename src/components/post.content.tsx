import { Document as RichTextDocuments } from "@contentful/rich-text-types";
import { format } from "date-fns";
import Image from "next/image";
import Categories from "./categories";
import RichText from "./rich.text";
type PostContentProps = {
  title: string | undefined;
  document: RichTextDocuments | undefined;
  createdAt?: string | undefined | Date;
  image: string | undefined;
  imageName: string | undefined;
  category?: string[] | string;
};

export default function PostContent({
  document,
  title,
  createdAt,
  image,
  category,
  imageName,
}: PostContentProps) {
  // Konversi kategori ke string jika berupa array
  const categoryText = Array.isArray(category)
    ? category.join(", ") // Gabungkan dengan koma
    : category;

  return (
    <section className="px-4 py-6 lg:px-[152px] mt-20 h-full">
      <div className="flex justify-between gap-20">
        <div className="flex flex-col">
          <p
            className="mt-8 p-1 bg-[#DFF1F0] w-[70px] text-center
            text-[#666666]"
          >
            {categoryText}
          </p>
          <h1 className="text-[27px] font-bold mt-4">{title}</h1>
          <p className="mt-4">
            {createdAt
              ? format(new Date(createdAt), "dd MMMM yyyy")
              : "Unknown Date"}
          </p>
          <div className="w-[950px] flex items-center justify-center mx-auto mt-2">
            <Image
              src={`https:${image}`}
              className="rounded-[8px]"
              width={2200}
              height={1900}
              alt={imageName || ""}
            />
          </div>

          <RichText document={document} className="mt-10 w-full" />
        </div>
        <div className="flex flex-col gap-10 min-w-[300px]">
          <Categories />
        </div>
      </div>
    </section>
  );
}
