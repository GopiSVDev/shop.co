"use client";

import CardGridSkeleton from "./CardGridSkeleton";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const CardGrid = ({ products }: { products: Product[] }) => {
  if (products.length === 0) return <CardGridSkeleton />;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
    >
      {products.map((product: Product, index: number) => {
        if (index < 4)
          return (
            <motion.div key={product.title + index} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          );
      })}
    </motion.div>
  );
};

export default CardGrid;
