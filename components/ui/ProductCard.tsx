// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import StarRating from "./StarRating";

const ProductCard = ({ item }: { item: unknown }) => {
  const { image, title, rating, amount, discountPercent } = item;

  return (
    <Card className="w-full rounded-2xl overflow-hidden shadow-lg font-satoshi">
      <Image
        src={image}
        alt={`image of ${title}`}
        className="w-full lg:h-[350px] rounded-2xl object-cover"
        height={200}
        width={200}
      />
      <CardContent className="pt-2">
        <h2 className="text-[16px] font-bold">{title}</h2>

        {/* Rating */}

        <StarRating rating={rating} />

        {/* Pricing */}
        <div className="flex gap-2 items-center">
          <span className="text-[20px] font-bold">{`$${
            discountPercent ? amount - (amount * discountPercent) / 100 : amount
          }`}</span>

          {discountPercent ? (
            <>
              <span className="text-[20px] font-bold text-[hsla(0,0%,0%,0.4)] line-through">
                {amount}
              </span>
              <span className="text-[10px] text-[hsla(0,100%,60%,1)] p-[6px] bg-[hsla(0,100%,60%,0.1)] rounded-[62px] font-medium">
                {`-${discountPercent}%`}
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
