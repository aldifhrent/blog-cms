"use client";

import Link from "next/link";
import useCategories from "@/actions/categories";
import TextCatalogue from "../text.catalogue";

export default function Categories() {
  const { categories } = useCategories(); // Mengambil data kategori

  // Flattening and removing duplicates
  const uniqueCategories = Array.from(new Set(categories.flat()));

  return (
    <div className="">
      <TextCatalogue text_first="Categories" />
      <ul className="flex flex-col gap-5 mt-10">
        {uniqueCategories.map((category: string, index) => (
          <li key={index}>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
