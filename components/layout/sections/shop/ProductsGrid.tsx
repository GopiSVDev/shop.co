"use client";

import { Product, useProductStore } from "@/store/useProductStore";
import ProductCard from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeletons/skeleton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ProductsGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const query = useSearchParams();
  const allProducts = useProductStore((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = query.get("category");
    const minValue = parseInt(query.get("min") || "0", 10);
    const maxValue = parseInt(query.get("max") || "15000", 10);
    const searchTerm = query.get("search")?.toLowerCase() || "";

    let updatedProducts = allProducts.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(updatedProducts);
    setIsLoading(false);
  }, [query, allProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {isLoading ? (
        Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-[325px] h-[470px] rounded-2xl shadow-lg p-4 flex flex-col gap-4"
          >
            <Skeleton className="w-full h-[310px] rounded-2xl" />
            <Skeleton className="w-3/4 h-5 rounded-md" />
            <Skeleton className="w-1/2 h-4 rounded-md" />
            <div className="flex gap-3 items-center">
              <Skeleton className="w-16 h-5 rounded-md" />
              <Skeleton className="w-12 h-4 rounded-md" />
              <Skeleton className="w-10 h-4 rounded-full" />
            </div>
          </div>
        ))
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            key={product.title + product.price}
          >
            <ProductCard product={product} />
          </motion.div>
        ))
      ) : (
        <p className="text-center col-span-full font-integralCf text-[40px] ml-8">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductsGrid;
