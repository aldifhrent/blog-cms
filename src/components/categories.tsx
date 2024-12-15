"use client";
import { getCategories } from "@/actions/categories";
import TextCatalogue from "./text.catalogue";
import Link from "next/link";

export default function Categories() {
  const { categories } = getCategories(); // Mengambil data kategori

  return (
    <div className="">
      <TextCatalogue text_first="Categories" />
      <ul className="flex flex-col  gap-5 mt-10">
        {categories.map((category, index) => (
          <Link href={`/category/${category}`} key={index}>
            {category}
          </Link> // Menampilkan kategori sebagai list
        ))}
      </ul>
    </div>
  );
}
