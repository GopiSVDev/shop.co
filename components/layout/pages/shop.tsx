import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductsGrid from "../sections/shop/ProductsGrid";
import { SlidersHorizontal } from "lucide-react";
import FilterBar from "../sections/shop/DesktopFilterBar";

const Shop = async () => {
  return (
    <div className="container px-4 py-5 md:px-10 lg:px-16">
      <div className="flex justify-between items-start">
        <Breadcrumbs />
        <span className="py-7">
          <SlidersHorizontal className="lg:hidden" />
        </span>
      </div>
      <div className="flex gap-5 justify-center lg:justify-start">
        <FilterBar />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Shop;
