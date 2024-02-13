import { configureStore } from "@reduxjs/toolkit";
import recentlyViewedReducer from "../features/recentlyViewedSlice";
import addToCartReducer from "../features/addToCartSlice";
import addToWishlistReducer from "../features/addToWishlistSlice";
import formReducer from "../features/checkOutReducer";
import checkoutFormReducer from "../features/checkoutFormSlice";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    recentlyViewed: recentlyViewedReducer,
    addToCart: addToCartReducer,
    addToWishlist: addToWishlistReducer,
    form: formReducer,
    checkoutForm: checkoutFormReducer,
    products: productReducer,
  },
});
