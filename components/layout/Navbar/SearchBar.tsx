import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MobileSearchBar from "./MobileSearchBar";

const SearchBar = ({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-2 bg-offWhite px-4 py-1 rounded-[64px] w-[420px]">
        <Search className="text-[hsla(0,0%,0%,0.4)]" />
        <Input className="font-satoshi" placeholder="Search for products..." />
      </div>

      {/* Mobile Version */}
      {isMobileSearchOpen && (
        <MobileSearchBar setIsMobileSearchOpen={setIsMobileSearchOpen} />
      )}
    </>
  );
};

export default SearchBar;
