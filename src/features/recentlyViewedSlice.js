import { createSlice } from "@reduxjs/toolkit";

// const loadState = () => {
//     try {
//         const serializedState = sessionStorage.getItem('recentlyViewed');
//         if (serializedState === null) {
//             return;
//         }
//         return JSON.parse(serializedState);
//     } catch (error) {
//         console.error(error);
//     }
// }

// const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('recentlyViewed', serializedState)
//     } catch (err) {
//         console.error(err);
//     }
// }

// const initialState = loadState() || {
//     viewedProducts: []
// };

const initialState = {
    viewedProducts: []
};

const recentlyViewedSlice = createSlice({
    name: 'recentlyViewed',
    initialState,
    reducers: {
        addViewedProducts: (state, action) => {
            state.viewedProducts = [action.payload, ...state.viewedProducts.slice(0, 3)];
            // saveState(state);
        }
    }
});

export const { addViewedProducts } = recentlyViewedSlice.actions;
export const selectViewedProducts = (state) => state.recentlyViewed.viewedProducts;
export default recentlyViewedSlice.reducer; 