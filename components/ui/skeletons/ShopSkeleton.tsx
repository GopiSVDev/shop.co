import { Skeleton } from "@/components/ui/skeletons/skeleton";

const ShopSkeleton = () => {
  return (
    <div className="flex gap-5 justify-center lg:justify-start px-4">
      <div className="hidden lg:flex flex-col w-[300px] rounded-[20px] border border-gray-200 bg-white p-6 shadow-md gap-6">
        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="w-full h-[1px]" />

        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-2/3 h-4 rounded-md" />
        ))}

        <Skeleton className="w-full h-[1px]" />

        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="w-full h-3 rounded-md" />
        <Skeleton className="w-full h-3 rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-[325px] h-[470px] rounded-2xl shadow-lg p-4 flex flex-col gap-4"
          >
            <Skeleton className="w-full h-[310px] rounded-2xl" />
            <Skeleton className="w-3/4 h-5 rounded-md" />
            <Skeleton className="w-1/2 h-4 rounded-md" />
            <div className="flex gap-3 items-center">
              <Skeleton className="w-16 h-5 rounded-md" />
              <Skeleton className="w-12 h-4 rounded-md" />
              <Skeleton className="w-10 h-4 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSkeleton;
