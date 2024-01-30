import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfWishlistItems: localStorage.getItem("numberOfWishListItems") ? JSON.parse(localStorage.getItem("numberOfWishListItems")) : 0,
  wishlistGroup: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : [],
};

const addToWishlistSlice = createSlice({
  name: "addToWishlist",
  initialState,
  reducers: {
    addToWishlist: (state, actions) => {
      state.numberOfWishlistItems += 1;
      state.wishlistGroup.unshift(actions.payload);
      localStorage.setItem("numberOfWishListItems", JSON.stringify(state.numberOfWishlistItems));
      localStorage.setItem("wishListItems", JSON.stringify(state.wishlistGroup));
    },
    removeFromWishlist: (state, actions) => {
      state.numberOfWishlistItems -= 1;
      // Ensure numberOfWishlistItems does not go below 0
      state.numberOfWishlistItems = Math.max(0, state.numberOfWishlistItems);
      const productAvailable = state.wishlistGroup.some(
        (product) => product.id === actions.payload.id
      ); //check if id is already available in the array
      if (productAvailable) {
        state.wishlistGroup = state.wishlistGroup.filter(
          (product) => product.id !== actions.payload.id
        ); //if true, filter and return all id's that are not equal to it
      }
      localStorage.setItem("numberOfWishListItems", JSON.stringify(state.numberOfWishlistItems));
      localStorage.setItem("wishListItems", JSON.stringify(state.wishlistGroup))
    },
  },
});

export const { addToWishlist, removeFromWishlist } = addToWishlistSlice.actions;
export default addToWishlistSlice.reducer;
export const wishlistGroupSelector = (state) =>
  state.addToWishlist.wishlistGroup;
