"use client";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const [thumbnailImages, setThumbnailImages] = useState(images.slice(1) || []);

  // Function to swap images
  const handleImageClick = (clickedImage: string) => {
    setThumbnailImages((prev) =>
      prev.map((img) => (img === clickedImage ? selectedImage : img))
    );
    setSelectedImage(clickedImage);
  };

  return (
    <div className="flex gap-3">
      {/* Left - Small Thumbnails (3 Images) */}
      <div className="flex flex-col gap-3">
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

      {/* Right - Big Image */}
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
          className="h-[525px] w-[444px] rounded-[20px]"
        ></div>
      ) : (
        <Skeleton className="h-[525px] w-[444px] rounded-[20px]" />
      )}
    </div>
  );
};

export default ProductGallery;
