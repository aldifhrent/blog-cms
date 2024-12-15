"use client";

import { useCategoryDetails } from "@/actions/categories";
import Loading from "@/app/loading";
import CategoryDetailsCard from "@/components/category/category.details.card";
import Header from "@/components/header";
import TextCatalogue from "@/components/text.catalogue";
import { IContentfulAsset } from "@/types/contentful";
import { IPostCardWithFields, IPostCardWithoutFields } from "@/types/posts";
import { format } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
export default function CategoryDetailPage() {
  const params = useParams<{ category: string }>();
  const { categories, loading } = useCategoryDetails(params.category);
  console.log(categories);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-[152px] py-10">
        <TextCatalogue text_first={params.category} />
        {categories.length === 0 ? (
          <p>No content found for this category.</p>
        ) : (
          <div className="flex gap-10 mt-10">
            {categories.map((detail, index) => {
              const category =
                Array.isArray(detail.fields.category) &&
                detail.fields.category.length > 0
                  ? detail.fields.category
                  : typeof detail.fields.category === "string"
                  ? [detail.fields.category] // Jika kategori adalah string, jadikan array
                  : [];
              return (
                <div
                  key={index}
                  className="w-[400px] max-w-[413px] rounded-[8px] bg-slate-100 hover:shadow-xl border-1 border-black"
                >
                  <Image
                    width={413}
                    height={262}
                    src={`https:${detail.fields.image.fields.file.url}`}
                    className="rounded-[8px] p-2"
                    alt={detail.fields.title || ""}
                  />
                  <div className="flex flex-col p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.map((cat: any, catIndex: number) => (
                        <Link
                          href={`/category/${cat}`}
                          key={`${index}-${catIndex}`}
                          className="p-1 bg-[#DFF1F0] text-[#666666] text-center"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>

                    <h1 className="text-[27px] w-[391px] mt-2 font-bold leading-[140%]">
                      {detail.fields.title}
                    </h1>
                    <div className="flex items-center gap-3 mt-4 text-sm">
                      {format(
                        new Date(detail.fields.createdAt),
                        "dd MMMM yyyy"
                      )}
                    </div>
                    <p className="max-w-[431px] mt-6 text text-[15px]">
                      {detail.fields.shortDescription}
                    </p>
                    <Link href={`/post/${detail.fields.slug || "#"}`}>
                      <button className="p-2 bg-black text-white mt-4 mb-2">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
