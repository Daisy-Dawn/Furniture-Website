import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfWishlistItems: 0,
}

const addToWishlistSlice = createSlice({
    name: 'addToWishlist',
    initialState,
    reducers: {
        addToWishlist: (state) => {
            state.numberOfWishlistItems += 1;
        },
        removeFromWishlist: (state) => {
            state.numberOfWishlistItems -= 1;
            // Ensure numberOfWishlistItems does not go below 0
            state.numberOfWishlistItems = Math.max(0, state.numberOfWishlistItems);
        },
    }
})

export const { addToWishlist, removeFromWishlist } = addToWishlistSlice.actions
export default addToWishlistSlice.reducer;