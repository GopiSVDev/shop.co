"use client";

import { useStore } from "zustand";
import { useProductStore } from "@/store/useProductStore";
import ImageGrid from "./ImageGrid";

const SingleProduct = ({ id }: { id: number }) => {
  const allProducts = useStore(useProductStore, (state) => state.products);
  const product = allProducts.find((p) => p.id === id);

  return (
    <div className="container flex flex-col px-4 py-5 md:px-10 lg:px-16">
      <div className="flex">
        {/* Images Section */}
        {Array.isArray(product?.images) && (
          <ImageGrid images={product.images} />
        )}
        {/* Product Details */}
        <div></div>
      </div>
    </div>
  );
};

export default SingleProduct;
