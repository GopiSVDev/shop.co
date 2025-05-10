import React from "react";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/components/ui/StarRating";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { Product } from "@/store/useProductStore";

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="font-integralCf text-[clamp(1.5rem,1.2142857142857144rem+1.4285714285714286vw,2.5rem)] font-bold ">
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

      <SizeSelector />

      <Separator />

      <QuantitySelector />
    </div>
  );
};

export default ProductInfo;
