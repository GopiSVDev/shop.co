import ProductCard from "./ProductCard";

const CardGrid = ({ data }: { data: unknown }) => {
  return (
    <div className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item: object, index: number) => {
        if (index < 4)
          return <ProductCard key={item.title + index} item={item} />;
      })}
    </div>
  );
};

export default CardGrid;
