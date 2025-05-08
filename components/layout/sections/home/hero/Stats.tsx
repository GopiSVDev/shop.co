"use client";

import { animate } from "motion/react";
import { useEffect, useState } from "react";

const Stats = ({ count, caption }: { count: string; caption: string }) => {
  const targetCount = parseInt(count, 10);

  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    if (!isNaN(targetCount)) {
      const controls = animate(0, targetCount, {
        duration: 1,
        ease: "easeOut",
        onUpdate: (latest) => setAnimatedCount(Math.round(latest)),
      });

      return () => controls.stop();
    }
  }, [targetCount]);

  return (
    <div className="flex flex-col">
      <p className="text-[clamp(1.5rem,1.2142857142857144rem+1.4285714285714286vw,2.5rem)] font-satoshi font-bold leading-none">
        {animatedCount.toLocaleString()}+
      </p>
      <p className="font-normal text-[hsla(0,0%,0%,0.6)] text-[clamp(0.75rem,0.6785714285714286rem+0.35714285714285715vw,1rem)]">
        {caption}
      </p>
    </div>
  );
};

export default Stats;
