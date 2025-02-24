import { create } from "zustand";
import { getAllProducts } from "@/lib/api";

export type Product = {
  images: string[];
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
};

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const data = await getAllProducts();
      set({ products: data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
}));
