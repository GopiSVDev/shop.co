import { Minus, ShoppingCart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuantitySelector = () => {
  return (
    <div className="flex items-center gap-4 w-full justify-center">
      {/* Quantity Selector */}
      <div
        className="flex items-center justify-between border border-gray-300 rounded-[62px] shadow-sm overflow-hidden"
        style={{
          width: "clamp(110px, 11.8vw, 170px)", // 110px (mobile) → 170px (desktop)
          height: "clamp(44px, 3.6vw, 52px)", // 44px (mobile) → 52px (desktop)
        }}
      >
        <Button variant="ghost" size="icon" className="h-full w-[40px]">
          <Minus className="h-5 w-5" />
        </Button>
        <span className="text-lg font-medium">1</span>
        <Button variant="ghost" size="icon" className="h-full w-[40px]">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Add to Cart Button */}
      <Button
        className="bg-black text-white flex items-center gap-2 hover:bg-gray-900 rounded-[62px]"
        style={{
          width: "clamp(236px, 27.8vw, 400px)", // 236px (mobile) → 400px (desktop)
          height: "clamp(44px, 3.6vw, 52px)", // 44px (mobile) → 52px (desktop)
        }}
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
};

export default QuantitySelector;
