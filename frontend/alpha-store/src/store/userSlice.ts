
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string;
    image: string;
    accessToken: string;
    isLoggedIn: boolean;
    email: string
}


const initialState: User = {
    name: "",
    image: "",
    accessToken: "",
    email: "",
    isLoggedIn: false
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setAccessToken(state, action: PayloadAction<string>){    
            state.accessToken = action.payload;
        },
        setIsLoggedIn(state, action: PayloadAction<boolean>){    
            state.isLoggedIn = action.payload;
        },
        logout(state) {
            state.accessToken="",
            state.isLoggedIn = false
        }
    }
})

export const {
    setAccessToken,
    setIsLoggedIn,
    logout
} = user.actions;

export default user.reducer;