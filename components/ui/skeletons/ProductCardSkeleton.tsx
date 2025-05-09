"use client";

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-[300px] h-[440px] rounded-2xl overflow-hidden shadow-lg font-satoshi flex flex-col animate-pulse bg-gray-200">
      <div className="min-h-[200px] max-h-[310px] w-full bg-gray-300 rounded-2xl"></div>

      <div className="pt-2 p-5 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-[70%]"></div>{" "}
        <div className="flex gap-3 items-center">
          <div className="h-5 bg-gray-300 rounded w-[50%]"></div>{" "}
          <div className="h-5 bg-gray-300 rounded w-[30%]"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
