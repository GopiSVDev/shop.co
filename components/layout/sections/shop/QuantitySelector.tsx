"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-4 w-full justify-center font-satoshi">
      {/* Quantity Selector */}
      <div
        className="flex items-center justify-between border border-gray-300 rounded-[62px] shadow-sm overflow-hidden 
      w-[clamp(6.875rem,5.803571428571429rem+5.357142857142857vw,10.625rem)] 
      py-[clamp(0.75rem,0.6785714285714286rem+0.35714285714285715vw,0.75rem)] 
      px-[clamp(1rem,0.9285714285714286rem+0.35714285714285715vw,1rem)]
      "
      >
        <button
          onClick={handleDecrease}
          className="w-[20px] md:w-[24px] flex items-center justify-center hover:opacity-70 transition"
        >
          <Minus className="w-full h-full" />
        </button>
        <span className="text-[14px] md:text-[20px] font-medium">
          {quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="w-[20px] md:w-[24px] flex items-center justify-center hover:opacity-70 transition"
        >
          <Plus className="w-full h-full" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button className="bg-black text-white hover:bg-gray-900 rounded-[62px] w-[clamp(14.75rem,11.821428571428571rem+14.642857142857144vw,25rem)] py-4 m-0">
        Add to Cart
      </Button>
    </div>
  );
};

export default QuantitySelector;
