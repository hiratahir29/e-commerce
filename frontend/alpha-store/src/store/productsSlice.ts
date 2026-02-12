import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Products {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    image: string;
    rating: number;
    reviewsCount: number;
    comments: [{id: any, name: string, comment: string, rating: number}]
    inStock: boolean;
}

interface ProductsState {
  allProducts: Products[];
  searchQuery: string;
  productLoading: boolean;
}

const initialState: ProductsState = {
    allProducts: [],
    searchQuery: "",
    productLoading: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        loadAllProducts(state, action: PayloadAction<Products[]>){
            console.log("Store: ",action.payload)
            state.allProducts = action.payload;
        },
       updateProduct(state, action: PayloadAction<Products>) {
           const index = state.allProducts.findIndex(
            (p) => String(p.id) === String(action.payload.id)
            );
            if (index !== -1) {
                state.allProducts[index] = action.payload;
            }
            },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setProductLoading(state, action: PayloadAction<boolean>){
            // console.log(action.payload)
            state.productLoading = action.payload;
        },
    }
})

export const {
    loadAllProducts,
    setSearchQuery,
    setProductLoading,
    updateProduct
} = productSlice.actions;

export default productSlice.reducer;