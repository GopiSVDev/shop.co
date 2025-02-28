import { Skeleton } from "./skeleton";

const CardGridSkeleton = () => {
  return (
    <div className="hidden container w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
      {[...Array(4)].map((_, index) => (
        <Skeleton
          className="w-[350px] h-[450px] rounded-2xl shadow-lg"
          key={index}
        />
      ))}
    </div>
  );
};

export default CardGridSkeleton;
