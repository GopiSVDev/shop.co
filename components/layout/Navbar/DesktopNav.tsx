"use client";

import Link from "next/link";

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-6 font-satoshi font-normal">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/shop">On Sale</Link>
          </li>
          <li>
            <Link href="/shop">On Sale</Link>
          </li>
          <li>
            <Link href="/shop">New Arrivals</Link>
          </li>
          <li>
            <Link href="/shop">Brands</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
