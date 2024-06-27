import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/Product";
import axios from "axios";

type ProductsState = {
    products: Product[];
    loading: "idle" | "pending" | "completed" | "failed";
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {

    try {
        debugger;
        const response = await axios.get<Product[]>("http://localhost:9001/products");
        return response.data
    } catch (error) {
       return thunkAPI.rejectWithValue({error: "Failed to fetch data"});
    }

});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            if(action.payload){
                state.products = action.payload;
            }
            state.loading = "completed";


        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            if(action.payload){
                state.error = "Failed to fetch data"
            }
            state.loading = "failed";
        });
    }
})


export const productsReducer = productsSlice.reducer;