"use client";

import { Button } from "@/components/ui/button";
import MobileCarousel from "../../../ui/MobileCarousel";
import CardGrid from "../../../ui/CardGrid";
import { useProductStore } from "@/store/useProductStore";

const TopSelling = () => {
  const products = useProductStore((state) => state.products);

  const randomProducts = products
    .sort(() => Math.random() - 0.5) // Quick shuffle
    .slice(0, 4);

  return (
    <section
      className="flex flex-col items-center pt-[clamp(3.125rem,2.85rem+1.375vw,4.5rem)] 
    pb-[clamp(2.5rem,2.2rem+1.5vw,4rem)] container mx-auto px-4"
    >
      <h2 className="font-bold font-integralCf text-[clamp(2rem,1.8rem+1vw,3rem)] text-center pb-8">
        TOP SELLING
      </h2>

      <MobileCarousel data={randomProducts} />
      <CardGrid products={randomProducts} />
      <Button className="my-8 w-full max-w-[220px]">View All</Button>
    </section>
  );
};

export default TopSelling;
