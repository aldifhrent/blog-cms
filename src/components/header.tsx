"use client";

import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle } from "./ui/dialog";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 py-6 lg:px-[152px] sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        <div className="hidden lg:flex items-center gap-10">
          <p>Home</p>
          <p>About</p>
          <p>Categories</p>
        </div>
        <h1 className="font-bold text-xl">
          <span className="p-2 bg-emerald-500 text-white mr-1">Travel</span>
          Book<span className="text-emerald-500">.</span>
        </h1>
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
              <CommandInput placeholder="Search article for travel, food, lifestyles" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
              </CommandList>
            </Command>
          </CommandDialog>
          <p>Contact</p>
          <p>Button Theme</p>
        </div>
      </div>
    </header>
  );
}
