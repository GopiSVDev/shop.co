"use client";

import { useStore } from "zustand";
import { useProductStore } from "@/store/useProductStore";
import ProductGallery from "./ProductGalley";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import StarRating from "@/components/ui/StarRating";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

const SingleProduct = ({ id }: { id: number }) => {
  const allProducts = useStore(useProductStore, (state) => state.products);
  const product = allProducts.find((p) => p.id === id);

  return (
    <div className="container flex flex-col">
      <div className="flex my-10 gap-10">
        {/* Image Gallery */}
        <ProductGallery images={product?.images || []} />

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-integralCf text-[40px] font-bold">
            {product?.title}
          </h2>

          {/* Rating */}
          <StarRating rating={product?.rating || 0} />

          {/* Price Section */}
          <div className="flex gap-2 items-center font-satoshi text-[32px]">
            <span className="text-[20px] font-bold">{`$${
              product?.discountPercentage
                ? (
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)
                : product?.price
            }`}</span>

            {product?.discountPercentage ? (
              <>
                <span className="text-[20px] font-bold text-[hsla(0,0%,0%,0.4)] line-through">
                  {product.price}
                </span>
                <span className="text-[10px] text-[hsla(0,100%,60%,1)] p-[6px] bg-[hsla(0,100%,60%,0.1)] rounded-[62px] font-medium">
                  {`-${product.discountPercentage}%`}
                </span>
              </>
            ) : (
              <></>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600">{product?.description}</p>

          <Separator className="my-6" />

          {/* Color Selection */}
          <ColorSelector />

          <Separator />

          {/* Size Selector */}
          <SizeSelector />

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <Button variant="ghost" className="px-3 py-2 text-xl">
                -
              </Button>
              <span className="px-4">1</span>
              <Button variant="ghost" className="px-3 py-2 text-xl">
                +
              </Button>
            </div>
            <Button className="bg-black text-white px-6 py-3">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
