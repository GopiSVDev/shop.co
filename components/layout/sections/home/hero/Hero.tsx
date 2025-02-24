import Image from "next/image";
import DesktopStats from "./DesktopStats";
import MobileStats from "./MobileStats";
import PrimaryInfo from "./PrimaryInfo";

const Hero = () => {
  return (
    <section className="w-full bg-offWhite">
      <div className="container lg:bg-hero lg:bg-cover lg:bg-no-repeat lg:bg-right lg:h-[663px]">
        <div className="px-4 md:px-10 lg:px-16 flex flex-col justify-center lg:items-start md:items-center">
          <PrimaryInfo />
          <MobileStats />
          <DesktopStats />
        </div>
      </div>
      {/* Hero Image for mobile */}
      <Image
        className="md:hidden block mx-auto h-auto w-full"
        src="/images/hero-mobile.webp"
        width={390}
        height={448}
        alt="hero image mobile"
        unoptimized
      />
    </section>
  );
};

export default Hero;
