import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/api";

const MobileCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel className="max-w-[320px] md:hidden">
      <CarouselContent>
        {data.map((product, index) => {
          return (
            <CarouselItem key={index}>
              <ProductCard product={product} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="hidden sm:flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default MobileCarousel;
