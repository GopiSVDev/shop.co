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
    <div className="lg:hidden flex items-center bg-offWhite w-full px-2 mx-2 rounded-lg md:w-[50%]">
      <Input
        className="font-satoshi text-[16px] px-2"
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
