import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getAllProducts } from "@/lib/api";
import ProductCard from "@/components/ui/ProductCard";

const Shop = async () => {
  const data = await getAllProducts();

  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
  console.log(data[3]);

  return (
    <div className="container">
      <Breadcrumbs />
      <div>
        {data && (
          <div className="flex gap-5">
            <ProductCard product={data[0]} />
            <ProductCard product={data[1]} />
            <ProductCard product={data[2]} />
            <ProductCard product={data[3]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
