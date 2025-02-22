import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import StarRating from "./StarRating";

const ProductCard = ({ item }: { item: unknown }) => {
  const { images, title, rating, price, discountPercentage } = item;

  return (
    <Card className="w-full rounded-2xl overflow-hidden shadow-lg font-satoshi">
      <Image
        src={images[0]}
        alt={`image of ${title}`}
        className="lg:h-[350px] rounded-2xl object-cover"
        height={200}
        width={200}
      />
      <CardContent className="pt-2">
        <h2 className="text-[20px] font-bold">{title}</h2>

        {/* Rating */}

        <StarRating rating={rating} />

        {/* Pricing */}
        <div className="flex gap-2 items-center">
          <span className="text-[20px] font-bold">{`$${
            discountPercentage
              ? price - (price * discountPercentage) / 100
              : price
          }`}</span>

          {discountPercentage ? (
            <>
              <span className="text-[20px] font-bold text-[hsla(0,0%,0%,0.4)] line-through">
                {Math.floor(parseInt(price))}
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
