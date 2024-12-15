"use client";

import { client } from "@/lib/client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.getEntries({
          content_type: "travel",
          "fields.category[exists]": true,
        });
        console.log("FETCH CATEGORIES", response);
        const fetchedCategories = response.items.map(
          (item) => item.fields.category
        );
        setCategories(fetchedCategories as Array<string>);
      } catch (err) {
        console.log("ERROR FETCHING", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export default useCategories;

export const useCategoryDetails = (params: string) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.getEntries<any>({
          content_type: "travel",
          "fields.category": params,
        });
        console.log("FETCH CATEGORIES", response);
        const fetchedCategories = response.items.map(
          (item) => item.fields.category
        );
        setCategories(fetchedCategories as Array<string>);
      } catch (err) {
        console.log("ERROR FETCHING", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};
