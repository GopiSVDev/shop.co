import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  title: string;
  thumbnail: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  discountPercentage: number;
};

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  increaseQuantity: (id: number, size: string, color: string) => void;
  decreaseQuantity: (id: number, size: string, color: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (newItem) => {
        const existingItemIndex = get().cart.findIndex(
          (item) =>
            item.id === newItem.id &&
            item.size === newItem.size &&
            item.color === newItem.color
        );

        if (existingItemIndex !== -1) {
          const updatedCart = [...get().cart];
          updatedCart[existingItemIndex].quantity += newItem.quantity;
          return set({ cart: updatedCart });
        }

        return set({ cart: [...get().cart, newItem] });
      },

      removeFromCart: (id, size, color) =>
        set({
          cart: get().cart.filter(
            (item) =>
              !(item.id === id && item.size === size && item.color === color)
          ),
        }),

      increaseQuantity: (id, size, color) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id && item.size === size && item.color === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }),

      decreaseQuantity: (id, size, color) =>
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id && item.size === size && item.color === color
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
