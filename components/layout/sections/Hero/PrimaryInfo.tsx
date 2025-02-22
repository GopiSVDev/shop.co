import { Button } from "@/components/ui/button";
import Link from "next/link";

const PrimaryInfo = () => {
  return (
    <div className="pt-[clamp(2.5rem,1.375rem+5.625vw,6.4375rem)]">
      <h1 className="text-[clamp(2.25rem,1.75rem+2.5vw,4rem)] font-bold font-integralCf leading-none pb-5">
        FIND CLOTHES <br />
        THAT MATCHES <br />
        YOUR STYLE
      </h1>
      <p className="text-[hsla(0,0%,0%,0.6)] text-[clamp(0.875rem,0.8392857142857143rem+0.17857142857142858vw,1rem)] pb-6 max-w-[545px]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link href="/shop">
        <Button className="font-satoshi font-medium w-full md:max-w-[210px]">
          Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default PrimaryInfo;
