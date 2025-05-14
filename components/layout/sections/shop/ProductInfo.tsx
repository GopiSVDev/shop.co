import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/components/ui/StarRating";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { Product } from "@/store/useProductStore";
import { useCartStore } from "@/store/useCartStore";

const ProductInfo = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState<string>("Red");
  const [selectedSize, setSelectedSize] = useState<string>("Small");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    const cartItem = {
      id: product?.id,
      title: product?.title,
      thumbnail: product?.thumbnail,
      size: selectedSize,
      color: selectedColor,
      price: product?.price,
      quantity: selectedQuantity,
      discountPercentage: product?.discountPercentage,
    };

    addToCart(cartItem);
  };

  const originalPrice = product.price;
  const displayDiscount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : 0;

  const discountedPrice = product.discountPercentage
    ? originalPrice - (originalPrice * displayDiscount) / 100
    : originalPrice;

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="font-integralCf text-[clamp(1.5rem,1.2142857142857144rem+1.4285714285714286vw,2.5rem)] font-bold ">
        {product?.title}
      </h2>

      {/* Rating */}
      <StarRating rating={product?.rating || 0} />

      {/* Price Section */}
      <div className="flex gap-2 items-center font-satoshi text-[32px]">
        <span className="text-[20px] font-bold">{`$${discountedPrice.toFixed(
          2
        )}`}</span>

        {product?.discountPercentage ? (
          <>
            <span className="text-[20px] font-bold text-[hsla(0,0%,0%,0.4)] line-through">
              {originalPrice.toFixed(2)}
            </span>
            <span className="text-[10px] text-[hsla(0,100%,60%,1)] p-[6px] bg-[hsla(0,100%,60%,0.1)] rounded-[62px] font-medium">
              {`-${displayDiscount}%`}
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
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <Separator />

      <SizeSelector
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <Separator />

      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductInfo;
