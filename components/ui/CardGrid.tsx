"use client";

import CardGridSkeleton from "./skeletons/CardGridSkeleton";
import ProductCard from "./ProductCard";
import { Product } from "@/store/useProductStore";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
};

const CardGrid = ({ products }: { products: Product[] }) => {
  if (products.length === 0) return <CardGridSkeleton />;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full flex gap-10 overflow-x-auto px-4 py-2 scroll-smooth scrollbar-hide justify-evenly"
    >
      {products.map((product: Product, index: number) => {
        if (index < 4)
          return (
            <motion.div
              key={product.title + index}
              variants={itemVariants}
              className="flex-shrink-0 md:w-[35%] lg:w-[300px]"
            >
              <ProductCard product={product} />
            </motion.div>
          );
      })}
    </motion.div>
  );
};

export default CardGrid;
