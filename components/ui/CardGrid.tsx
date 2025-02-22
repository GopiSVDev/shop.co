import ProductCard from "./ProductCard";

type Item = {
  image: string;
  title: string;
  rating: number;
  amount: number;
  discountPercent: number;
};

const CardGrid = ({ data }: { data: Item[] }) => {
  return (
    <div className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item: Item, index: number) => {
        if (index < 4)
          return <ProductCard key={item.title + index} item={item} />;
      })}
    </div>
  );
};

export default CardGrid;
