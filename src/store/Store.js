import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from '../features/CategorySlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
    }
})