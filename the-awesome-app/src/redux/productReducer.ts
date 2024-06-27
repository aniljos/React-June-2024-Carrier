import { GetThunkAPI, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/Product";
import axios from "axios";

export interface ProductState{
    products: Product[],
    status: 'idle' | 'loading' | 'failed' | 'success',
    error: string | null
}
export const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: null
}
export const fetchProductsAction=createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {

    //debugger;
    try {
        
        const response  = await axios.get('http://localhost:9001/products');
      //  debugger;
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue({error: 'Failed to fetch products'});
    }

});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAction.pending, (state: ProductState) => {

            state.status = 'loading';
        });
        builder.addCase(fetchProductsAction.fulfilled, (state: ProductState, action: PayloadAction<Product[]>) => {

            state.status = 'success';
            state.products = action.payload;
        });
        builder.addCase(fetchProductsAction.rejected, (state: ProductState) => {
            state.status = 'failed';
            state.error = 'Failed to fetch products';
        });
    }
})
export const productReducer = productSlice.reducer;