import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from './productsSlice';
import { productsApi } from "../api/products";


const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export default store;