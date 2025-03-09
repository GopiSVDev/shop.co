"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCategoryName } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export interface Category {
  title: string;
  count: number;
}

const CategoryFilter = ({ categories }: { categories: Category[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate loading effect (Remove if not needed)
  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  // Set category from URL params on mount
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
  }, [searchParams]);

  // Function to update the category in the URL
  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (selectedCategory === category) {
      newParams.delete("category");
      setSelectedCategory(null);
    } else {
      newParams.set("category", category);
      setSelectedCategory(category);
    }

    replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      {isLoading
        ? [...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-[24px] w-full rounded-md" />
          ))
        : categories.map(({ title, count }, index) => (
            <div
              key={title + index}
              className="flex justify-between items-center"
            >
              <Label className="text-[16px] flex items-center gap-2">
                {formatCategoryName(title)}
                <span>({count})</span>
              </Label>
              <Checkbox
                checked={selectedCategory === title}
                onCheckedChange={() => handleCategoryChange(title)}
              />
            </div>
          ))}
    </div>
  );
};

export default CategoryFilter;
