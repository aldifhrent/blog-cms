"use client";
import { getCategories } from "@/actions/categories";
import Header from "@/components/header";
import TextCatalogue from "@/components/text.catalogue";
import Link from "next/link";

export default function Categories() {
  const { categories } = getCategories(); // Mengambil data kategori

  return (
    <div>
      <Header />

      <div className="px-4 lg:px-[152px] py-10">
        {/* Judul Halaman */}
        <TextCatalogue text_first="Explore Categories" />

        {/* Grid Kategori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {categories.map((category, index) => (
            <Link
              href={`/category/${category}`}
              key={index}
              className="group relative block p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Nama Kategori */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 capitalize group-hover:text-emerald-600">
                  {category}
                </h2>
                <span className="text-emerald-500 text-sm font-medium">
                  View Posts →
                </span>
              </div>

              {/* Deskripsi */}
              <p className="mt-4 text-sm text-gray-600 group-hover:text-gray-800">
                Discover engaging posts in <strong>{category}</strong>.
              </p>

              {/* Decorative Circle */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
