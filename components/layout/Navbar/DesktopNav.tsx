"use client";

import Link from "next/link";

const DesktopNav = () => {
  const items = [
    { label: "Shop", href: "/shop", type: "route" },
    { label: "Top Selling", href: "/#top-selling", type: "route" },
    { label: "New Arrivals", href: "/#new-arrivals", type: "route" },
    { label: "Brands", href: "/", type: "route" },
  ];

  return (
    <>
      <nav className="hidden md:flex items-center gap-6 font-satoshi font-normal ">
        <ul className="flex items-center gap-6">
          {items.map(({ label, href }) => (
            <li key={label} className="relative group">
              <Link href={href} scroll={true}>
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
