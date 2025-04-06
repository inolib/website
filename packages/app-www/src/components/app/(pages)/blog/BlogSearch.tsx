"use client";
import { Input, SearchField, Label } from "react-aria-components";

type BlogSearchProps = {
  onSearch: (query: string) => void;
};

export const BlogSearch = ({ onSearch }: BlogSearchProps) => {
  return (
    <div className="flex h-auto items-center">
      <SearchField className="w-full">
        <Label htmlFor="searchInput" className="sr-only">
          Rechercher un article
        </Label>
        <Input
          id="searchInput"
          placeholder="Rechercher un article"
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-full border border-gray-300 p-2 pl-10 text-sm leading-6 text-gray-900 placeholder:text-gray-500 focus:border-[#254147] focus:shadow-[0_0_0_4px_#579AA8] focus:outline-none"
          style={{
            backgroundImage: "url('/images/icons/search.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center",
            backgroundSize: "16px 16px",
          }}
        />
      </SearchField>
    </div>
  );
};
