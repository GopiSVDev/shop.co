"use client";

import { Button } from "@/components/ui/button";
import MobileCarousel from "../../../ui/MobileCarousel";
import CardGrid from "../../../ui/CardGrid";
import { useProductStore } from "@/store/useProductStore";
import Link from "next/link";
import { motion } from "motion/react";

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
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-bold font-integralCf text-[clamp(2rem,1.8rem+1vw,3rem)] text-center pb-8"
      >
        TOP SELLING
      </motion.h2>

      <MobileCarousel data={randomProducts} />
      <CardGrid products={randomProducts} />
      <Link href="/shop">
        <Button className="my-8 w-full max-w-[220px] transform transition-transform duration-200 hover:scale-[1.1] active:scale-90">
          View All
        </Button>
      </Link>
    </section>
  );
};

export default TopSelling;
