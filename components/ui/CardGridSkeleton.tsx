const CardGridSkeleton = () => {
  return (
    <div className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg"
        />
      ))}
    </div>
  );
};

export default CardGridSkeleton;
