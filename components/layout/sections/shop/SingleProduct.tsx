"use client";

import { useStore } from "zustand";
import { useProductStore } from "@/store/useProductStore";
import ProductGallery from "./ProductGalley";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "@/components/ui/badge";

const SingleProduct = ({ id }: { id: number }) => {
  const allProducts = useStore(useProductStore, (state) => state.products);
  const product = allProducts.find((p) => p.id === id);

  return (
    <div className="container flex flex-col">
      <div className="flex my-10">
        {/* Image Gallery */}
        <ProductGallery images={product?.images || []} />

        {/* Product Details */}
        <div className="flex flex-col space-y-4 w-full lg:w-[400px]">
          <h2 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h2>

          {/* Rating */}
          <div className="flex items-center space-x-1 text-yellow-500">
            ⭐⭐⭐⭐⭐ <span className="text-gray-500">4.5/5</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">$260</span>
            <span className="text-gray-400 line-through">$300</span>
            <Badge variant="destructive">-40%</Badge>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from soft,
            breathable fabric, it offers superior comfort and style.
          </p>

          <Separator />

          {/* Color Selection */}
          <div>
            <h4 className="text-lg font-semibold">Select Colors</h4>
            <div className="flex space-x-2 mt-2">
              <Button className="w-6 h-6 rounded-full bg-[#4E4B3A] border-2 border-black" />
              <Button className="w-6 h-6 rounded-full bg-[#2C424D]" />
              <Button className="w-6 h-6 rounded-full bg-[#33334D]" />
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h4 className="text-lg font-semibold">Choose Size</h4>
            <div className="flex space-x-2 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <Button key={size} variant="outline" className="px-4 py-2">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <Button variant="ghost" className="px-3 py-2 text-xl">
                -
              </Button>
              <span className="px-4">1</span>
              <Button variant="ghost" className="px-3 py-2 text-xl">
                +
              </Button>
            </div>
            <Button className="bg-black text-white px-6 py-3">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
