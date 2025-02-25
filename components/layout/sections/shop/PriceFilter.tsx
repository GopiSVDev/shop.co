"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const PriceFilter = () => {
  const [values, setValues] = useState([0, 15000]);

  return (
    <div className="flex flex-col gap-4 font-satoshi">
      <p className="font-bold">Price Range</p>
      {/* Slider Component */}
      <Slider
        min={0}
        max={15000}
        step={1}
        defaultValue={values}
        onValueChange={setValues}
        className="w-full"
      />
      {/* Display Min & Max Values */}
      <div className="mt-3 flex justify-between text-sm text-muted-foreground">
        <span>Min: {values[0]}</span>
        <span>Max: {values[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
