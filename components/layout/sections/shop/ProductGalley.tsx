"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="relative mx-5 bg-offWhite rounded-[20px] w-full max-w-[450px] lg:max-w-[550px]">
      {images.length > 0 && (
        <Carousel className="w-full" opts={{ loop: false }}>
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="w-[100%] h-auto object-cover rounded-2xl bg-offWhite transition-all duration-300 ease-in-out"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default ProductGallery;
