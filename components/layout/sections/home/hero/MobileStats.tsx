import Stats from "./Stats";

const MobileStats = () => {
  return (
    <div className="flex flex-col justify-center pb-5 md:hidden">
      {/* First Row: Show Two Stats with One Divider */}
      <div className="lg:hidden flex flex-row justify-evenly pb-4">
        <Stats count="200" caption="International Brands" />
        <div className="w-[2px] h-10 bg-[hsla(0,0%,0%,0.1)]"></div>{" "}
        {/* First Divider */}
        <Stats count="2000" caption="High-Quality Products" />
      </div>

      {/* Third Stat: Centered Below in Mobile, Part of Row in Large Screens */}
      <div className="flex justify-center md:hidden">
        <Stats count="30000" caption="Happy Customers" />
      </div>
    </div>
  );
};

export default MobileStats;
