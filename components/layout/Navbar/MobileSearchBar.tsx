import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const MobileSearchBar = ({
  setIsMobileSearchOpen,
}: {
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center bg-offWhite h-8 px-2 py-1 rounded-[64px] w-[180px]">
      <Input
        className="font-satoshi text-[10px] px-2 h-5"
        placeholder="Search for products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue ? (
        <Search size={18} className="text-gray-500" />
      ) : (
        <button
          onClick={() => setIsMobileSearchOpen(false)}
          aria-label="Close Search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default MobileSearchBar;
