"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const slideVariants = {
  initial: (direction: number) => ({
    y: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -20 : 20,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setDirection(-1);
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setDirection(1);
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 w-full justify-center font-satoshi">
      {/* Quantity Selector */}
      <div
        className="flex items-center justify-between border border-gray-300 rounded-[62px] shadow-sm overflow-hidden 
        w-[clamp(6.875rem,5.803571428571429rem+5.357142857142857vw,10.625rem)] 
        py-[clamp(0.75rem,0.6785714285714286rem+0.35714285714285715vw,0.75rem)] 
        px-[clamp(1rem,0.9285714285714286rem+0.35714285714285715vw,1rem)]"
      >
        <button
          onClick={handleDecrease}
          className="w-[20px] md:w-[24px] flex items-center justify-center hover:opacity-70 transition"
        >
          <Minus className="w-full h-full" />
        </button>

        <div className="relative h-[24px] w-[24px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.span
              key={quantity}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="absolute text-[14px] md:text-[20px] font-medium"
            >
              {quantity}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          onClick={handleIncrease}
          className="w-[20px] md:w-[24px] flex items-center justify-center hover:opacity-70 transition"
        >
          <Plus className="w-full h-full" />
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button className="bg-black text-white hover:bg-gray-900 rounded-[62px] py-4 m-0 min-w-[200px] max-w-[400px] w-full">
        Add to Cart
      </Button>
    </div>
  );
};

export default QuantitySelector;
