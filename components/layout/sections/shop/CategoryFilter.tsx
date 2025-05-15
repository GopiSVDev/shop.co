"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCategoryName } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeletons/skeleton";
import { motion } from "motion/react";

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

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
  }, [searchParams]);

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
    <>
      <motion.div
        className="flex flex-col gap-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {isLoading
          ? [...Array(10)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <Skeleton className="h-[24px] w-full rounded-md" />
              </motion.div>
            ))
          : categories.map(({ title, count }, index) => (
              <motion.div
                key={title + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
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
              </motion.div>
            ))}
      </motion.div>
    </>
  );
};

export default CategoryFilter;
