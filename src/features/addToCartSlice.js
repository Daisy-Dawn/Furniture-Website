import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCartItems: 0,
}

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addToCart: (state) => {
            state.numberOfCartItems += 1;
        },
        removeFromCart: (state) => {
            state.numberOfCartItems -= 1;
            // Ensure numberOfCartItems does not go below 0
            state.numberOfCartItems = Math.max(0, state.numberOfCartItems);
        },
        addToCartByQuantity: (state, action) => {
            state.numberOfCartItems += action.payload;
        }
    }
})

export const { addToCart, removeFromCart, addToCartByQuantity } = addToCartSlice.actions
export default addToCartSlice.reducer;