"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const ProductGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="mx-auto bg-offWhite rounded-[20px] w-full max-w-[450px] lg:max-w-[600px] relative">
      {images.length > 0 ? (
        <Carousel className="w-full z-10" opts={{ loop: false }}>
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-2xl bg-offWhite transition-all duration-300 ease-in-out"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <Skeleton className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[525px] rounded-2xl" />
      )}
    </div>
  );
};

export default ProductGallery;
