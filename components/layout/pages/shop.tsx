import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DesktopFilterBar from "../sections/shop/DesktopFilterBar";
import ProductsGrid from "../sections/shop/ProductsGrid";

const Shop = async () => {
  return (
    <div className="container px-4 py-5 md:px-10 lg:px-16">
      <Breadcrumbs />
      <div className="flex gap-5 justify-center">
        <DesktopFilterBar />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Shop;
