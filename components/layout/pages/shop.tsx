import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductsGrid from "../sections/shop/ProductsGrid";
import FilterBar from "../sections/shop/FilterBar";

const Shop = async () => {
  return (
    <div className="container px-4 py-5 md:px-10 lg:px-16">
      <div className="flex justify-between items-start">
        <Breadcrumbs />
      </div>
      <div className="flex gap-5 justify-center lg:justify-start">
        <FilterBar />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Shop;
