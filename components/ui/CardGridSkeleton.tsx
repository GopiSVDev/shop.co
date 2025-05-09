"use client";

import ProductCardSkeleton from "./ProductCardSkeleton";
import { motion } from "motion/react";

const CardGridSkeleton = () => {
  return (
    <motion.div className="w-full flex gap-5 overflow-x-auto px-4 py-2 scroll-smooth scrollbar-hide justify-evenly">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[35%] lg:w-[300px]"
        >
          <ProductCardSkeleton />
        </div>
      ))}
    </motion.div>
  );
};

export default CardGridSkeleton;
