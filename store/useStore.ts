import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name?: string;
  model?: string;
  price_usd: number;
  price_uyu: number;
}

interface StoreState {
  currency: "UYU" | "USD";
  setCurrency: (curr: "UYU" | "USD") => void;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      currency: "UYU",
      setCurrency: (curr) => set({ currency: curr }),
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(p => p.id !== id) })),
    }),
    { name: "vm-fragancee-settings" }
  )
);