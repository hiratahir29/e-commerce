import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setAccessToken } from "../store/userSlice";
import { jwtDecode } from "jwt-decode";



export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

interface CartState {
  items: CartItem[];
  userId: string | null;
}

const loadCart = (userId: string): CartItem[] => {
  try {
    const data = localStorage.getItem(`cart_${userId}`);
    console.log("data: ", data);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCart = (userId: string, items: CartItem[]) => {
  localStorage.setItem(`cart_${userId}`, JSON.stringify(items));
};

const initialState: CartState = {
  items: [],
  userId: null
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
        state.items.push({ ...action.payload, quantity: 1 });
      }

      if (state.userId) {
        saveCart(state.userId, state.items);
      }
    },

    increment(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity = (item.quantity ?? 0) + 1;

      if (state.userId) {
        saveCart(state.userId, state.items);
      }
    },

    decrement(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity! > 1)
        item.quantity = (item.quantity ?? 0) - 1;

      if (state.userId) {
        saveCart(state.userId, state.items);
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);

      if (state.userId) {
        saveCart(state.userId, state.items);
      }
    },

    clearCart(state) {
      state.items = [];

      if (state.userId) {
        saveCart(state.userId, []);
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(setAccessToken, (state, action) => {
      if (action.payload) {
        const decoded = jwtDecode(action.payload);
        console.log("Decoded: ",decoded)
        //@ts-ignore
        const userId = decoded.user.id;
        // const userId = action.payload; // ideally decode JWT
        state.userId = userId;
        state.items = loadCart(userId);
      } else {
        state.userId = null;
        state.items = [];
      }
    });
  }
});

export const {
  addToCart,
  increment,
  decrement,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
