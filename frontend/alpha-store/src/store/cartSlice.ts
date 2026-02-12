import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

interface CartState {
  items: CartItem[];
}

const loadCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCart = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartState = {
  items: typeof window !== "undefined" ? loadCart() : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1;
      } else {
        state.items.push({...action.payload,quantity:1});
      }
      saveCart(state.items);
    },
    increment(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity = (item.quantity ?? 0) + 1;
      saveCart(state.items);
    },
    decrement(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity! > 1) item.quantity = (item.quantity ?? 0) - 1;
      saveCart(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveCart(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveCart([]);
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
