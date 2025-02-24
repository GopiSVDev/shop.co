"use client";
import { useProductStore } from "@/store/useProductStore";
import ProductCard from "@/components/ui/ProductCard";

const ProductsGrid = () => {
  const products = useProductStore((state) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {products.map((p) => {
        return <ProductCard key={p.title + p.price} product={p} />;
      })}
    </div>
  );
};

export default ProductsGrid;
