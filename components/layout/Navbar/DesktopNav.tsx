"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-6 font-satoshi font-normal">
        <ul className="flex items-center gap-6">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-satoshi flex items-center gap-1">
                Shop <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Shirts</DropdownMenuItem>
                <DropdownMenuItem>T Shirts</DropdownMenuItem>
                <DropdownMenuItem>Shorts</DropdownMenuItem>
                <DropdownMenuItem>Jeans</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
