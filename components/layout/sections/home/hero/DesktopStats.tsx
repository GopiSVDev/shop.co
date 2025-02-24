import Stats from "./Stats";

const DesktopStats = () => {
  return (
    <div className="hidden md:flex md:flex-row md:justify-between px-14 md:px-0 mt-[clamp(1.25rem,0.75rem+2.5vw,2rem)] w-[550px]">
      <Stats count="200" caption="International Brands" />
      <div className="w-[2px] h-16 bg-[hsla(0,0%,0%,0.1)]"></div>{" "}
      {/* First Divider */}
      <Stats count="2,000" caption="High-Quality Products" />
      <div className="w-[2px] h-16 bg-[hsla(0,0%,0%,0.1)]"></div>
      {/* Second Divider */}
      <Stats count="30,000" caption="Happy Customers" />
    </div>
  );
};

export default DesktopStats;
