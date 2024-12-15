/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export const useAuthors = () => {
  const [authors, setAuthors] = useState([]); // State to store the authors data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=5"
        );
        setAuthors(response.data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchAuthors(); // Fetch authors data on mount
  }, []); // Empty dependency array means this runs once on mount

  return { authors, loading };
};
