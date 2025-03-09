"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [thumbnailImages, setThumbnailImages] = useState<string[]>([]);

  // Update state when images prop changes
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
      setThumbnailImages(images.slice(1));
    }
  }, [images]);

  // Function to swap images
  const handleImageClick = (clickedImage: string) => {
    setThumbnailImages((prev) =>
      prev.map((img) => (img === clickedImage ? selectedImage : img))
    );
    setSelectedImage(clickedImage);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-3">
      {/* Big Image - Moves to top on mobile */}
      {selectedImage ? (
        <div
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.3s ease-in-out",
            backgroundColor: "hsla(0, 0%, 94%, 1)",
          }}
          className="h-[525px] w-[444px] rounded-[20px] lg:order-2 order-1"
        ></div>
      ) : (
        <Skeleton className="h-[525px] w-[444px] rounded-[20px] lg:order-2 order-1" />
      )}

      {/* Thumbnails - Horizontal on mobile, vertical on desktop */}
      <div className="flex lg:flex-col flex-row gap-3 order-2 lg:order-1">
        {thumbnailImages.length > 0
          ? thumbnailImages.map((img, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(img)}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "hsla(0, 0%, 94%, 1)",
                }}
                className={`w-[152px] h-[167px] rounded-[20px] cursor-pointer transition-all ${
                  selectedImage === img ? "border-4 border-black scale-105" : ""
                }`}
              ></div>
            ))
          : [...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className="w-[152px] h-[167px] rounded-[20px]"
              />
            ))}
      </div>
    </div>
  );
};

export default ProductGallery;
