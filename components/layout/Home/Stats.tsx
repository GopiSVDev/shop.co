import React from "react";

const Stats = ({ count, caption }: { count: string; caption: string }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[clamp(1.5rem,1.2142857142857144rem+1.4285714285714286vw,2.5rem)] font-satoshi font-bold leading-none">
        {count}+
      </p>
      <p className="font-normal text-[hsla(0,0%,0%,0.6)] text-[clamp(0.75rem,0.6785714285714286rem+0.35714285714285715vw,1rem)]">
        {caption}
      </p>
    </div>
  );
};

export default Stats;
