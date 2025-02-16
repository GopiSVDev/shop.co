import React from "react";

const Stats = ({ count, caption }: { count: string; caption: string }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[40px] font-satoshi font-bold leading-none">
        {count}+
      </p>
      <p className="font-normal text-[hsla(0,0%,0%,0.6)]">{caption}</p>
    </div>
  );
};

export default Stats;
