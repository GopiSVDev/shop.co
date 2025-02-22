import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getAllProducts } from "@/lib/api";
import ProductCard from "@/components/ui/ProductCard";

const Shop = async () => {
  const data = await getAllProducts();

  console.log(data[0]);

  return (
    <div className="container">
      <Breadcrumbs />
      <div>{data && <ProductCard item={data[0]} />}</div>
    </div>
  );
};

export default Shop;
