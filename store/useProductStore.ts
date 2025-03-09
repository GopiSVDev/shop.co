import { create } from "zustand";
import { getAllProducts } from "@/lib/api";
import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  images: string[];
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
  description: string;
};

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      fetchProducts: async () => {
        try {
          const data = await getAllProducts();
          set({ products: data });
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      },
    }),
    {
      name: "product-storage",
      partialize: (state) => ({ products: state.products }),
    }
  )
);
