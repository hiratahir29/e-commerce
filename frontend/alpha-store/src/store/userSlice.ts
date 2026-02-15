
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string;
    image: string;
    accessToken: string;
    email: string
}


const initialState: User = {
    name: "",
    image: "",
    accessToken: "",
    email: ""
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setAccessToken(state, action: PayloadAction<string>){    
            state.accessToken = action.payload;
        }
    }
})

export const {
    setAccessToken
} = user.actions;

export default user.reducer;