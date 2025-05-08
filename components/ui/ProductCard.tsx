"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import StarRating from "./StarRating";
import { Product } from "@/store/useProductStore";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { id, thumbnail, title, rating, price, discountPercentage } = product;

  const handleClick = () => {
    router.push(`/shop/${id}-${title}`);
  };

  return (
    <Card
      className="max-w-[350px] max-h-[500px] rounded-2xl overflow-hidden shadow-lg font-satoshi flex flex-col cursor-pointer transition duration-400"
      onClick={handleClick}
    >
      <Image
        src={thumbnail}
        alt={`image of ${title}`}
        className="lg:h-[350px] rounded-2xl object-cover w-[350px]"
        height={200}
        width={200}
        unoptimized
      />

      <CardContent className="pt-2">
        <h2 className="text-[20px] font-bold">{title}</h2>

        {/* Rating */}

        <StarRating rating={rating} />

        {/* Pricing */}
        <div className="flex gap-2 items-center">
          <span className="text-[20px] font-bold">{`$${
            discountPercentage
              ? (price - (price * discountPercentage) / 100).toFixed(2)
              : price
          }`}</span>

          {discountPercentage ? (
            <>
              <span className="text-[20px] font-bold text-[hsla(0,0%,0%,0.4)] line-through">
                {price}
              </span>
              <span className="text-[10px] text-[hsla(0,100%,60%,1)] p-[6px] bg-[hsla(0,100%,60%,0.1)] rounded-[62px] font-medium">
                {`-${discountPercentage}%`}
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
