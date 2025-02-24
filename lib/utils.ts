import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getAllProducts } from "./api";
import { Product } from "@/store/useProductStore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategoryName(category: string): string {
  return category
    .split("-") // Split by '-'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join with a space
}

export async function allCategories(): Promise<
  { title: string; count: number }[]
> {
  const products = await getAllProducts();

  const categoryMap = new Map<string, number>();

  products.forEach((item: Product) => {
    categoryMap.set(item.category, (categoryMap.get(item.category) || 0) + 1);
  });

  return Array.from(categoryMap, ([title, count]) => ({ title, count }));
}
