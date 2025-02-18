import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const MobileCarousel = ({ data }: { data: Array<object> }) => {
  return (
    <Carousel className="max-w-[320px] md:hidden">
      <CarouselContent>
        {data.map((item, index) => {
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
  );
};

export default MobileCarousel;
