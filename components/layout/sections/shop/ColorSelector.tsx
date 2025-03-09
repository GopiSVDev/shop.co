"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#10b981",
  yellow: "#facc15",
  purple: "#a855f7",
  pink: "#ec4899",
  gray: "#6b7280",
};

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    console.log("Selected Color Object:", { selectedColor: color });
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
