import {configureStore} from '@reduxjs/toolkit'
import recentlyViewedReducer from '../features/recentlyViewedSlice'
import addToCartReducer from '../features/addToCartSlice';
import addToWishlistReducer from '../features/addToWishlistSlice';
import formReducer from '../features/checkOutReducer';

export const store = configureStore({
    reducer: {
        recentlyViewed: recentlyViewedReducer,
        addToCart: addToCartReducer,
        addToWishlist: addToWishlistReducer,
        form: formReducer,
    },
});