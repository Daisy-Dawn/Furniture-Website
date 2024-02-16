import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async() => {
        const response = await axios.get('https://freefurnitura.000webhostapp.com/reactApiPhp/api/allProductList.php')
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
  });

export default productSlice.reducer;