"use client";
import { Product, useProductStore } from "@/store/useProductStore";
import ProductCard from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

const ProductsGrid = () => {
  const query = useSearchParams();
  const [category, setCategory] = useState<string | null>("");
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(15000);
  const allProducts = useStore(useProductStore, (state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const categoryParam = query.get("category")?.toString();
    const min = query.get("min");
    const max = query.get("max");

    const minValue = min ? parseInt(min) : 0;
    const maxValue = max ? parseInt(max) : 15000;

    setMin(min ? parseInt(min) : 0);
    setMax(max ? parseInt(max) : 15000);
    setCategory(categoryParam ?? "");

    let updatedProducts = allProducts.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );

    if (category) {
      updatedProducts = updatedProducts.filter(
        (pr: Product) => pr.category == category
      );
    }

    setFilteredProducts(updatedProducts);
  }, [query, allProducts, category]);

  console.log(min, max);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredProducts.length > 0
        ? filteredProducts.map((p) => {
            return <ProductCard key={p.title + p.price} product={p} />;
          })
        : [...Array(12)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-[325px] h-[470px] rounded-2xl shadow-lg"
            />
          ))}
    </div>
  );
};

export default ProductsGrid;
