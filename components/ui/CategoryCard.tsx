import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const CategoryCard = ({
  category,
}: {
  category: { name: string; image: string };
}) => {
  const { name, image }: { name: string; image: string } = category;
  return (
    <Link href="/shop" passHref>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-no-repeat bg-cover h-[200px] rounded-[20px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <p className="mt-4 ml-6 text-[clamp(1.5rem,1.2857142857142856rem+1.0714285714285714vw,2.25rem)] font-bold font-satoshi">
          {name}
        </p>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
