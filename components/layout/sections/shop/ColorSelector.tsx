"use client";

import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  Red: "#ef4444",
  Blue: "#3b82f6",
  Green: "#10b981",
  Yellow: "#facc15",
  Purple: "#a855f7",
  Pink: "#ec4899",
  Gray: "#6b7280",
};

export default function ColorSelector({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-3 font-satoshi">
      Select Colors
      <div className="flex gap-2 flex-wrap">
        {Object.entries(colorMap).map(([name, hex]) => (
          <div
            key={name}
            style={{ backgroundColor: hex }}
            className={cn(
              "w-10 h-10 rounded-full cursor-pointer transition-all",
              selectedColor === name ? "border-2 border-black" : ""
            )}
            onClick={() => handleColorSelect(name)}
          />
        ))}
      </div>
    </div>
  );
}
