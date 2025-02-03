"use client";
import { Input, SearchField } from "react-aria-components";

type BlogSearchProps = {
  onSearch: (query: string) => void;
};

export const BlogSearch = ({ onSearch }: BlogSearchProps) => {
  return (
    <div className="w-64 shrink-0">
      <SearchField>
        <Input
          className="w-full rounded-full border p-2 placeholder:text-sm placeholder:leading-6 focus:border-[#254147] focus:shadow-[0px_0px_0px_4px_#579AA8] focus:outline-none"
          id="searchInput"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Rechercher un article"
          style={{
            backgroundImage: "url('/images/icons/search.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center",
            backgroundSize: "16px 16px",
            paddingLeft: "35px",
          }}
        />
      </SearchField>
    </div>
  );
};
