"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allCategories } from "@/lib/utils";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await allCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* DESKTOP FILTER (Always Visible) */}
      <div className="hidden h-fit lg:flex flex-col w-[300px] border border-gray-300 rounded-[20px] px-6 py-5 bg-white shadow-md">
        <p className="font-satoshi font-bold text-[20px] flex justify-between items-center">
          Filters <SlidersHorizontal />
        </p>

        <div className="w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>

        <CategoryFilter categories={categories} />
        <div className="w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>
        <PriceFilter />
      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <Button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2">
          {isOpen ? "Close Filters" : "Show Filters"}
        </Button>
      </div>

      {/* MOBILE FILTER PANEL (Slide Up Animation) */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sliding Filter */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t rounded-t-2xl px-6 py-5 z-50"
          >
            <p className="font-satoshi font-bold text-[20px] flex justify-between items-center">
              Filters <SlidersHorizontal />
            </p>

            <div className="w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>

            <CategoryFilter categories={categories} />
            <div className="w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>
            <PriceFilter />
          </motion.div>
        </>
      )}
    </>
  );
};

export default FilterBar;
