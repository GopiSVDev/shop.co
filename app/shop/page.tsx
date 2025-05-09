import { Suspense } from "react";
import Shop from "@/components/layout/pages/shop";
import ShopSkeleton from "@/components/ui/skeletons/ShopSkeleton";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <PageWrapper>
        <Shop />
      </PageWrapper>
    </Suspense>
  );
};

export default Page;
