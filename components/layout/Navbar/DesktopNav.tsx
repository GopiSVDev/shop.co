"use client";

import Link from "next/link";

const DesktopNav = () => {
  const items: string[] = ["Shop", "On Sale", "New Arrivals", "Brands"];

  return (
    <>
      <nav className="hidden md:flex items-center gap-6 font-satoshi font-normal ">
        <ul className="flex items-center gap-6">
          {items.map((item) => (
            <li key={item} className="relative group">
              <Link href="/shop">{item}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
