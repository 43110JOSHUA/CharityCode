"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();
    if (term) {
      params.set("search_query", term);
      replace(`/explore?${params.toString()}`);
    } else {
      // If search is cleared and we're on explore page, stay there but remove query
      if (pathname === "/explore") {
        replace("/explore");
      }
    }
  }, 300);

  return (
    <div className="input-group" style={{ maxWidth: "600px" }}>
      <input
        type="text"
        className="form-control bg-dark-tan border-border-tan"
        placeholder="Search for projects..."
        aria-label="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search_query")?.toString()}
      />
    </div>
  );
}
