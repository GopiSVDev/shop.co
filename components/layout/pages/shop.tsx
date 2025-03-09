import ProductsGrid from "../sections/shop/ProductsGrid";
import FilterBar from "../sections/shop/FilterBar";

const Shop = async () => {
  return (
    <div className="container py-5">
      <div className="flex gap-5 justify-center lg:justify-start">
        <FilterBar />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Shop;
