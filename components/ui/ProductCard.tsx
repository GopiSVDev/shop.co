"use client";

import Image from "next/image";
import StarRating from "./StarRating";
import { Product } from "@/store/useProductStore";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { id, thumbnail, title, rating, price, discountPercentage } = product;

  const handleClick = () => {
    router.push(`/shop/${id}-${title}`);
  };

  const originalPrice = price;

  const displayDiscount = discountPercentage
    ? Math.round(discountPercentage)
    : 0;

  const discountedPrice = discountPercentage
    ? originalPrice - (originalPrice * displayDiscount) / 100
    : originalPrice;

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="min-w-[250px] max-w-[300px] h-[auto] lg:h-[440px] rounded-2xl overflow-hidden shadow-lg font-satoshi flex flex-col cursor-pointer transition duration-400"
      onClick={handleClick}
    >
      <Image
        src={thumbnail}
        alt={`image of ${title}`}
        className="min-h-[200px] max-h-[310px] rounded-2xl object-cover w-full bg-[hsla(0,0%,94%,1)] transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-95"
        height={310}
        width={300}
        unoptimized
        draggable={false}
      />

      <div className="pt-2 p-5">
        <h2 className="text-[20px] font-bold">{title}</h2>

        {/* Rating */}

        <StarRating rating={rating} />

        {/* Pricing */}
        <div className="flex gap-3 items-center">
          <span className="text-[20px] font-bold">{`$${discountedPrice.toFixed(
            2
          )}`}</span>

          {discountPercentage ? (
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
      </div>
    </motion.div>
  );
};

export default ProductCard;
