"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="md:hidden p-2"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Side Nav */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b">
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
              href="/"
              className="flex items-center justify-between gap-1"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link href="/#top-selling" onClick={() => setIsOpen(false)}>
              Top Selling
            </Link>
          </li>
          <li>
            <Link href="/#new-arrivals" onClick={() => setIsOpen(false)}>
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
