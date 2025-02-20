import CategoryCard from "@/components/ui/CategoryCard";

const BrowseByStyle = () => {
  const categories = [
    { name: "Casual", image: "/images/casual.webp" },
    { name: "Formal", image: "/images/formal.webp" },
    { name: "Party", image: "/images/party.webp" },
    { name: "Gym", image: "/images/gym.webp" },
  ];

  const getColSpan = (index: number) => {
    if (index === 1 || index === 2) return "lg:col-span-2"; // First and fourth divs take 2 columns
    return "lg:col-span-1"; // Second and third divs take 1 column
  };

  return (
    <div className="bg-[hsla(0,0%,94%,1)] container rounded-[40px] py-9 px-6 lg:px-16 flex flex-col justify-center">
      <h2 className="font-bold font-integralCf text-[clamp(2rem,1.8rem+1vw,3rem)] text-center pb-8">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, index) => {
          return (
            <div key={category.name} className={`${getColSpan(index)}`}>
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseByStyle;
