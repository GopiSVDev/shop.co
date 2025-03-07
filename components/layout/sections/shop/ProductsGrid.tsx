"use client";

import { Product, useProductStore } from "@/store/useProductStore";
import ProductCard from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

const ProductsGrid = () => {
  const query = useSearchParams();
  const allProducts = useStore(useProductStore, (state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = query.get("category");
    const minValue = parseInt(query.get("min") || "0", 10);
    const maxValue = parseInt(query.get("max") || "15000", 10);

    let updatedProducts = allProducts.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(updatedProducts);
  }, [query, allProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <ProductCard
              key={product.title + product.price}
              product={product}
            />
          ))
        : Array.from({ length: 12 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-[325px] h-[470px] rounded-2xl shadow-lg"
            />
          ))}
    </div>
  );
};

export default ProductsGrid;
