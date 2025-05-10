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
    <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full justify-center font-satoshi">
      {/* Quantity Selector */}
      <div className="flex items-center justify-around border border-gray-300 rounded-[62px] shadow-sm overflow-hidden min-w-[150px] py-3 px-3 bg-offWhite">
        <button
          onClick={handleDecrease}
          className="w-[24px] flex items-center justify-center hover:opacity-70 transition"
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
              className="absolute text-[20px] md:text-[24px] font-medium"
            >
              {quantity}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          onClick={handleIncrease}
          className="w-[24px] flex items-center justify-center hover:opacity-70 transition"
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
