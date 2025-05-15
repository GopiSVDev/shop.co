import { Suspense } from "react";
import ShopSkeleton from "@/components/ui/skeletons/ShopSkeleton";
import PageWrapper from "@/components/PageWrapper";
import FilterBar from "@/components/layout/sections/shop/FilterBar";
import ProductsGrid from "@/components/layout/sections/shop/ProductsGrid";

const Page = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<ShopSkeleton />}>
        <div className="container py-5">
          <div className="flex gap-5 justify-center lg:justify-start">
            <FilterBar />
            <ProductsGrid />
          </div>
        </div>
      </Suspense>
    </PageWrapper>
  );
};

export default Page;
