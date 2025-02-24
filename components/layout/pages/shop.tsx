import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DesktopFilterBar from "../sections/shop/DesktopFilterBar";

const Shop = async () => {
  return (
    <div className="container px-4 py-5 md:px-10 lg:px-16">
      <Breadcrumbs />
      <DesktopFilterBar />
    </div>
  );
};

export default Shop;
