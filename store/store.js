import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  addItemToCart: (item) =>
    set((state) => {
      return { items: [...state.items, item] };
    }),
  removeItemFromCart: (id) =>
    set((state) => {
      const result = state.items.filter((_, index) => index !== id);
      return { items: result };
    }),
  updateQuantity: (id, quantity) =>
    set((state) => {
      state.items[id].quantity = quantity;
      return { items: [...state.items] };
    }),
}));
