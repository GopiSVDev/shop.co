import { ShoppingCart, Search, Menu, CircleUserRound } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="container flex justify-between items-center px-1 py-5 md:px-24">
        {/* Navigation Section */}
        <nav className="flex items-center gap-4">
          <button className="md:hidden" aria-label="Open menu">
            <Menu />
          </button>
          <Link
            href="/"
            className="font-integralCf text-2xl font-bold leading-none flex items-center -mt-1 md:text-3xl"
          >
            SHOP.CO
          </Link>
        </nav>

        {/* Actions Icons Section */}
        <div className="flex gap-3 md:gap-5">
          <button aria-label="Search">
            <Search />
          </button>
          <button aria-label="Shopping Cart">
            <ShoppingCart />
          </button>
          <button aria-label="User Profile">
            <CircleUserRound />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
