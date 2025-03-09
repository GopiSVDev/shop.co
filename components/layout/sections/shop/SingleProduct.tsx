"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import ProductGallery from "./ProductGalley";
import ProductInfo from "./ProductInfo";

const SingleProduct = ({ id }: { id: number }) => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(); // Fetch only if products are empty
    }
  }, [fetchProducts, products]);

  const product = products.find((p) => p.id === id);

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col lg:flex-row my-10 gap-10">
        {/* Image Gallery */}
        <ProductGallery images={product?.images || []} />

        {/* Product Details */}
        {product && <ProductInfo product={product} />}
      </div>
    </div>
  );  
};

export default SingleProduct;
