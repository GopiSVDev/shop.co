import {
  ShoppingCart,
  Search,
  Menu,
  CircleUserRound,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-4 py-5 md:px-10 lg:px-16 lg:gap-10">
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
        {/* More Actions available only on larger screens */}
        <nav
          className="hidden md:flex items-center gap-6 font-satoshi font-normal"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-6">
            <li>
              <Link className="flex items-center gap-1" href="/">
                Shop <ChevronDown size={16} />
              </Link>
            </li>
            <li>
              <Link href="/">On Sale</Link>
            </li>
            <li>
              <Link href="/">New Arrivals</Link>
            </li>
            <li>
              <Link href="/">Brands</Link>
            </li>
          </ul>
        </nav>

        {/* Search bar for lg devices */}
        <div className="hidden lg:flex items-center gap-2 bg-offWhite px-4 py-1 rounded-[64px] w-[420px]">
          <Search className="text-[hsla(0,0%,0%,0.4)]" />
          <Input
            className="font-satoshi"
            placeholder="Search for products..."
          />
        </div>

        {/* Actions Icons Section */}
        <div className="flex gap-3 md:gap-5">
          <button className="lg:hidden" aria-label="Search">
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
