"use client";

import { useCategoryDetails } from "@/actions/categories";
import CategoryDetailsCard from "@/components/category.details.card";
import Header from "@/components/header";
import TextCatalogue from "@/components/text.catalogue";
import { format } from "date-fns";
import { useParams } from "next/navigation";

export default function CategoryDetailPage() {
  const params = useParams<{ category: string }>();
  const { categories } = useCategoryDetails(params.category);
  return (
    <div>
      <Header />
      <div className="px-4 lg:px-[152px] py-10">
        <TextCatalogue text_first={params.category} />
        {categories.length === 0 ? (
          <p>No content found for this category.</p>
        ) : (
          <div className="flex gap-10 mt-10">
            {categories.map((detail: any, index) => (
              <div key={index}>
                <CategoryDetailsCard
                  key={detail.slug}
                  title={detail.title}
                  createdAt={format(new Date(detail.createdAt), "dd MMMM yyyy")}
                  image={detail.image.fields.file.url}
                  category={detail.category || []}
                  shortDescription={detail.shortDescription || ""}
                  slug={detail.slug || "#"}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
