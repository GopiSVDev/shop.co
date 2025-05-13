import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SizeSelector({
  selectedSize,
  setSelectedSize,
}: {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="font-satoshi">
      <h4 className="text-lg font-semibold my-2">Choose Size</h4>
      <div className="flex flex-wrap gap-4">
        {["Small", "Medium", "Large", "X-Large"].map((size) => (
          <Button
            key={size}
            variant="outline"
            className={cn(
              "px-4 py-2 transition-all",
              selectedSize === size
                ? "bg-black text-white hover:bg-black hover:text-white"
                : "hover:bg-gray-200"
            )}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}
