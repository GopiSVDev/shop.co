"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import ProductGallery from "./ProductGalley";
import ProductInfo from "./ProductInfo";

const SingleProduct = ({ id }: { id: number }) => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products]);

  const product = products.find((p) => p.id === id);

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col lg:flex-row my-10 gap-10 items-start">
        <div className="w-full lg:w-1/2 flex justify-center">
          <ProductGallery images={product?.images || []} />
        </div>

        <div className="w-full lg:w-1/2">
          {product && <ProductInfo product={product} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
