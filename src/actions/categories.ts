"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { client } from "@/lib/client";
import { useState, useEffect } from "react";

export const getCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Ambil entries dengan field "category"
        const response = await client.getEntries({
          content_type: "category",
        });

        // Ambil kategori dari response dan set ke state
        const fetchedCategories = response.items.map(
          (item: any) => item.fields.category
        );
        setCategories(fetchedCategories);
      } catch (err) {
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
