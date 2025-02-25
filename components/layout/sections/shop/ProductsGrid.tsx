"use client";
import { useProductStore } from "@/store/useProductStore";
import ProductCard from "@/components/ui/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsGrid = () => {
  const products = useProductStore((state) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.length > 0
        ? products.map((p) => {
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
