import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { newArrivals } from "@/lib/data";

const NewArrivals = () => {
  return (
    <section
      className="flex flex-col items-center pt-[clamp(3.125rem,2.85rem+1.375vw,4.5rem)] 
    pb-[clamp(2.5rem,2.2rem+1.5vw,4rem)] container mx-auto px-4"
    >
      <h2 className="font-bold font-integralCf text-[clamp(2rem,1.8rem+1vw,3rem)] text-center pb-8">
        NEW ARRIVALS
      </h2>

      <Carousel className="max-w-[320px] md:hidden">
        <CarouselContent>
          {newArrivals.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <ProductCard item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden sm:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <Button className="my-6 w-full max-w-[220px]">View All</Button>
    </section>
  );
};

export default NewArrivals;
