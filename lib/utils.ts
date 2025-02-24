import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getAllProducts } from "./api";
import { Product } from "@/types/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategoryName(category: string): string {
  return category
    .split("-") // Split by '-'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join with a space
}

export async function allCategories(): Promise<string[]> {
  const result: string[] = [];

  const products = await getAllProducts();
  products.map((item: Product) => {
    if (!result.includes(item.category)) {
      result.push(item.category);
    }
  });

  return result;
}
