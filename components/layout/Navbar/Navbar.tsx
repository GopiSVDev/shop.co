"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileSearchOpen) {
        setIsMobileSearchOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollingDown(true);
      } else if (currentScrollY < prevScrollY) {  
        setScrollingDown(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileSearchOpen, prevScrollY]);

  return (
    <motion.header
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: scrollingDown ? "-100%" : 0,
        opacity: scrollingDown ? 0 : 1,
      }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 w-full bg-white shadow-md"
    >
      <div className="container flex justify-between items-center px-4 py-5 md:px-10 lg:px-16 lg:gap-10">
        {/* Left Section */}
        <nav className="flex items-center gap-4">
          <MobileNav />
          {!isMobileSearchOpen && (
            <Link
              href="/"
              className="font-integralCf text-2xl font-bold md:text-3xl"
            >
              SHOP.CO
            </Link>
          )}
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
    </motion.header>
  );
};

export default Navbar;
