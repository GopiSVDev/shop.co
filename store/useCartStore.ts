import { create } from "zustand";

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

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        return { cart: updatedCart };
      }

      return { cart: [...state.cart, newItem] };
    }),

  removeFromCart: (id, size, color) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      ),
    })),

  increaseQuantity: (id, size, color) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id, size, color) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ cart: [] }),
}));
