"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";
import { useState } from "react";

const Navbar = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 shadow-md">
      <div className="container flex justify-between items-center px-4 py-5 md:px-10 lg:px-16 lg:gap-10">
        {/* Left Section */}
        <nav className="flex items-center gap-4">
          <MobileNav />
          <Link
            href="/"
            className="font-integralCf text-2xl font-bold md:text-3xl"
          >
            SHOP.CO
          </Link>
        </nav>

        {/* Center Section (Desktop Navigation) */}
        <DesktopNav />

        {/* Right Section (Search & Icons) */}
        <SearchBar
          isMobileSearchOpen={isMobileSearchOpen}
          setIsMobileSearchOpen={setIsMobileSearchOpen}
        />
        <NavActions
          isMobileSearchOpen={isMobileSearchOpen}
          setIsMobileSearchOpen={setIsMobileSearchOpen}
        />
      </div>
    </header>
  );
};

export default Navbar;
