import React from "react";

const CategoryCard = ({
  category,
}: {
  category: { name: string; image: string };
}) => {
  const { name, image }: { name: string; image: string } = category;
  return (
    <div
      className="bg-no-repeat bg-cover h-[200px] rounded-[20px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="mt-4 ml-6 text-[clamp(1.5rem,1.2857142857142856rem+1.0714285714285714vw,2.25rem)] font-bold font-satoshi">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
