import {configureStore} from '@reduxjs/toolkit'
import recentlyViewedReducer from '../features/recentlyViewedSlice'
import addToCartReducer from '../features/addToCartSlice';
import addToWishlistReducer from '../features/addToWishlistSlice';

export const store = configureStore({
    reducer: {
        recentlyViewed: recentlyViewedReducer,
        addToCart: addToCartReducer,
        addToWishlist: addToWishlistReducer,
    },
});