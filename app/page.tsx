import { Button } from "@/components/ui/button";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="w-full bg-offWhite">
      <section className="container bg-hero relative">
        <div className="w-1/2 py-11">
          <div className="flex flex-col gap-8 m-12">
            <h1 className="text-[64px] font-bold font-integralCf leading-none">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[hsla(0,0%,0%,0.6)]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              size="lg"
              className="py-4 px-14 rounded-[62px] font-satoshi font-medium w-[210px]"
            >
              Shop Now
            </Button>
          </div>
          <div className="flex gap-8 px-10 mb-14 overflow-hidden">
            <Stats count="200" caption="International Brands" />
            <div className="divider"></div>
            <Stats count="2,000" caption="High-Quality Products" />
            <div className="divider"></div>
            <Stats count="30,000" caption="Happy Customers" />
          </div>
        </div>
        <svg
          className="absolute top-5"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
            fill="black"
          />
        </svg>
      </section>
    </div>
  );
}
