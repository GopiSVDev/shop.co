"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCategoryName } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface Category {
  title: string;
  count: number;
}

const CategoryFilter = ({ categories }: { categories: Category[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to update the category in the state and url immediately
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
  }, [searchParams]);

  // Function to update the category in the state & URL
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
      {categories.map(({ title, count }, index) => (
        <div key={title + index} className="flex justify-between items-center">
          <Label className="text-[16px]">
            {formatCategoryName(title)}
            {"  "}
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
