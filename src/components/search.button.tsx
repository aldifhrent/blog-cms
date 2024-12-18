"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandList,
} from "./ui/command";
import { useState } from "react";
import { DialogTitle } from "./ui/dialog";
import { Search } from "lucide-react";
import { searchPost } from "@/types/posts";
import { useSearch } from "@/actions/search";
import Image from "next/image";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const { query, setQuery, posts, loading, error } = useSearch();

  return (
    <div className="flex items-center gap-10">
      <button
        className="text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search size={20} />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search Modal</DialogTitle>
        <Command>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query as the user types
            placeholder="Search article for travel, food, lifestyles"
            className="p-2 rounded-md w-full"
          />
          <CommandList>
            {loading && <div className="p-2">Loading...</div>}
            {error && <div className="p-2 text-red-500">{error}</div>}
            {!loading && !error && posts.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            {!loading && !error && posts.length > 0 && (
              <div className="space-y-2">
                {posts.map((post: searchPost, index: number) => {
                  return (
                    <div key={index} className="p-2 flex gap-2 items-center">
                      
                        <Image
                          src={`http:${post.fields.image}` || ""}
                          alt={post.fields.title}
                          className="rounded-lg"
                          width={50}
                          height={50}
                        />
                     
                      <a
                        href={`/post/${post.fields.slug}`}
                        className="text-nowrap"
                      >
                        {post.fields.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
