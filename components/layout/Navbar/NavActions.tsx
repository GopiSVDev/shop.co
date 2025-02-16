"use client";

import { ShoppingCart, Search, CircleUserRound } from "lucide-react";

const NavActions = ({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {!isMobileSearchOpen && (
        <div className="flex gap-3 md:gap-5">
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="lg:hidden"
            aria-label="Search"
          >
            <Search size={24} />
          </button>
          <button aria-label="Shopping Cart">
            <ShoppingCart />
          </button>
          <button aria-label="User Profile">
            <CircleUserRound />
          </button>
        </div>
      )}
    </>
  );
};

export default NavActions;
