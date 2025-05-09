import DesktopStats from "./DesktopStats";
import MobileStats from "./MobileStats";
import PrimaryInfo from "./PrimaryInfo";
import * as motion from "motion/react-client";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="w-full bg-offWhite">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container lg:bg-hero lg:bg-cover lg:bg-no-repeat lg:bg-right lg:h-[663px]"
      >
        <div className="px-4 md:px-10 lg:px-16 flex flex-col justify-center lg:items-start md:items-center">
          <PrimaryInfo />
          <MobileStats />
          <DesktopStats />
        </div>
      </motion.div>
      {/* Hero Image for mobile */}
      {/* <Image
        className="md:hidden block mx-auto h-auto w-full"
        src="/images/hero-mobile.webp"
        width={390}
        height={448}
        alt="hero image mobile"
        unoptimized
      /> */}
      <motion.img
        src="/images/hero-mobile.webp"
        alt="hero image mobile"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="md:hidden block mx-auto h-auto w-full"
      />
    </section>
  );
};

export default Hero;
