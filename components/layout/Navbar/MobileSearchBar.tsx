import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import * as motion from "motion/react-client";

const MobileSearchBar = ({
  setIsMobileSearchOpen,
  searchValue,
  setSearchValue,
  handleSearch,
}: {
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="lg:hidden flex items-center bg-offWhite w-full px-2 mx-2 rounded-lg md:w-[50%]"
    >
      <Input
        className="font-satoshi text-[16px] px-2"
        placeholder="Search for products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue ? (
        <Search size={18} className="text-gray-500" onClick={handleSearch} />
      ) : (
        <button
          onClick={() => setIsMobileSearchOpen(false)}
          aria-label="Close Search"
        >
          <X size={18} />
        </button>
      )}
    </motion.div>
  );
};

export default MobileSearchBar;
