import ProductCard from "./ProductCard";
import { Product } from "@/types/api";

const CardGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
      {products.map((product: Product, index: number) => {
        if (index < 4)
          return <ProductCard key={product.title + index} product={product} />;
      })}
    </div>
  );
};

export default CardGrid;
