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

export default function SearchButton() {
  const [open, setOpen] = useState(false);

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
          {/* Use a standard input field for search query */}
          <input
            type="text"
            placeholder="Search article for travel, food, lifestyles"
            className="p-2 rounded-md w-full"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
