
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string;
    image: string;
    token: string;
    email: string
}


const initialState: User = {
    name: "",
    image: "",
    token: "",
    email: ""
}

const user = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setAccessToken(state, action: PayloadAction<User>){    
            state.token = action.payload.token;
        }
    }
})

export const {
    setAccessToken
} = user.actions;

export default user.reducer;