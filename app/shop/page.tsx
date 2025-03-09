import { Suspense } from "react";
import Shop from "@/components/layout/pages/shop";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <Shop />
    </Suspense>
  );
};

export default Page;
