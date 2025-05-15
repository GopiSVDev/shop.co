"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MobileSearchBar from "./MobileSearchBar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SearchBar = ({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  useEffect(() => {
    const valueFromURL = searchParams.get("search") || "";
    setSearchValue(valueFromURL);
  }, [searchParams]);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-2 bg-offWhite px-4 py-1 rounded-[64px] w-[420px]">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);

            if (value.trim() === "") {
              router.push("/shop");
            }
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="font-satoshi"
          placeholder="Search for products..."
        />
        <Search
          className="text-[hsla(0,0%,0%,0.4)] cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* Mobile Version */}

      {isMobileSearchOpen && (
        <MobileSearchBar
          setIsMobileSearchOpen={setIsMobileSearchOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
      )}
    </>
  );
};

export default SearchBar;
