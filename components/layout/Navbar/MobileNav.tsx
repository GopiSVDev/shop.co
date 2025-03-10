"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="md:hidden"
      >
        <Menu />
      </button>

      {/* Mobile Side Nav */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden mobile-nav`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Link
            href="/"
            className="font-integralCf text-2xl font-bold md:text-3xl"
          >
            SHOP.CO
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <Link
              className="flex items-center gap-1"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Shop <ChevronDown size={16} />
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
