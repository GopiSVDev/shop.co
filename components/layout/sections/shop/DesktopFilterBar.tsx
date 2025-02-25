import { allCategories } from "@/lib/utils";
import CategoryFilter from "./CategoryFilter";
import { SlidersHorizontal } from "lucide-react";
import { Suspense } from "react";

const DesktopFilterBar = async () => {
  const categories = await allCategories();

  return (
    <div className="hidden lg:flex flex-col w-[300px] border border-gray-300 rounded-[20px] px-6 py-5">
      <p className="font-satoshi font-bold text-[20px] flex justify-between items-center">
        Filters <SlidersHorizontal />
      </p>

      <div className="container w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>

      <Suspense fallback={<div>Loading....</div>}>
        <CategoryFilter categories={categories} />
        <div className="container w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>
        
      </Suspense>
    </div>
  );
};

export default DesktopFilterBar;
