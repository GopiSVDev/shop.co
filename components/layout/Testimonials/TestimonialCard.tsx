import StarRating from "@/components/ui/StarRating";
import Image from "next/image";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { rating: number; name: string; review: string };
}) => {
  const { rating, name, review } = testimonial;
  return (
    <div className="px-[clamp(1.5rem,1.3571428571428572rem+0.7142857142857143vw,2rem)] py-[clamp(1.5rem,1.4285714285714286rem+0.35714285714285715vw,1.75rem)] border border-[hsla(0,0%,0%,0.1)] rounded-[20px] font-satoshi flex flex-col gap-2 md:max-w-[400px]">
      <StarRating rating={rating} />
      <h3 className="text-[clamp(1rem,0.9285714285714286rem+0.35714285714285715vw,1.25rem)] font-bold flex gap-2 items-center">
        {name}
        <span>
          <Image
            src="/svg/verified.svg"
            alt="verified"
            width={19}
            height={19}
          />
        </span>
      </h3>
      <p className="text-[clamp(0.875rem,0.8392857142857143rem+0.17857142857142858vw,1rem)] text-[hsla(0,0%,0%,0.6)]">
        &quot;{review}&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
