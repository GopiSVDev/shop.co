"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

const NavActions = ({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cart = useCartStore((state) => state.cart);
  const totalCount = cart.length;

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
            <Link href="/cart" aria-label="Shopping Cart">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </div>
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default NavActions;
