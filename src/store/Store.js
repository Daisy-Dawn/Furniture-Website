import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from '../features/CategorySlice'
import recentlyViewedReducer from '../features/recentlyViewedSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        recentlyViewed: recentlyViewedReducer,
    },
});