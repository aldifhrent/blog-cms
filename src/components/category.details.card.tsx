/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
export default function CategoryDetailsCard({
  image,
  altImageName,
  category,
  title,
  createdAt,
  shortDescription,
  slug,
}: any) {
  return (
    <div className="w-[400px] max-w-[413px] rounded-[8px] bg-slate-100 hover:shadow-xl border-1 border-black">
      <Image
        width={413}
        height={262}
        src={`https:${image}`}
        className="rounded-[8px] p-2"
        alt={altImageName || ""}
      />
      <div className="flex flex-col p-4">
        {/* Menampilkan kategori secara terpisah */}
        <div className="mt-8 flex flex-wrap gap-2">
          {category.map((cat: any, index: any) => (
            <Link
              href={`/category/${cat}`}
              key={index}
              className="p-1 bg-[#DFF1F0] text-[#666666] text-center"
            >
              {cat}
            </Link>
          ))}
        </div>

        <h1 className="text-[27px] w-[391px] mt-2 font-bold leading-[140%]">
          {title}
        </h1>
        <div className="flex items-center gap-3 mt-4 text-sm">
          <div>{createdAt}</div>
        </div>
        <p className="max-w-[431px] mt-6 text text-[15px]">
          {shortDescription}
        </p>
        <Link href={`/post/${slug || "#"}`}>
          <button className="p-2 bg-black text-white mt-4 mb-2">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
