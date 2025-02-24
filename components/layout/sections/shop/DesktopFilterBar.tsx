import { allCategories } from "@/lib/utils";
import { formatCategoryName } from "@/lib/utils";

const DesktopFilterBar = async () => {
  const categories: string[] = await allCategories();

  return (
    <div className="hidden lg:flex flex-col w-[300px] border border-gray-300 rounded-[20px] px-6 py-5">
      <p className="font-satoshi font-bold text-[20px]">Filters</p>
      <div className="container w-full h-[1px] border border-[hsla(0,0%,0%,0.1)] my-6"></div>
      <div>
        {categories && (
          <div>
            {categories.map((category: string, index: number) => {
              return (
                <>
                  <div className="text-[16px]" key={category + index}>
                    {formatCategoryName(category)}
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopFilterBar;
