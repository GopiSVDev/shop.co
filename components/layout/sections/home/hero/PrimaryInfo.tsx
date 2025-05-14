import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const wordVariants1 = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const lines = ["FIND CLOTHES", "THAT MATCHES", "YOUR STYLE"];
const paragraphText = `Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.`;

const PrimaryInfo = () => {
  return (
    <div className="pt-[clamp(2.5rem,1.375rem+5.625vw,6.4375rem)]">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-[clamp(2.25rem,1.75rem+2.5vw,4rem)] font-bold font-integralCf leading-none pb-5"
      >
        {lines.map((line, i) => (
          <div key={i} className="block">
            {line.split(" ").map((word, j) => (
              <motion.span
                key={`${i}-${j}`}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.h1>

      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-[hsla(0,0%,0%,0.6)] text-[clamp(0.875rem,0.8392857142857143rem+0.17857142857142858vw,1rem)] pb-6 max-w-[545px]"
      >
        {paragraphText.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants1}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
      <Link href="/shop">
        <Button className="font-satoshi font-medium w-full md:max-w-[210px] transition-all duration-200 hover:scale-[1.1] active:scale-90">
          Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default PrimaryInfo;
