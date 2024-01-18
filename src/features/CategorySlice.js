import {createSlice} from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {selectedCategory: ''},
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            console.log(state, action)
        }
    }
})

export const {setCategory} = categorySlice.actions;
export const selectCategory = (state) => state.category.selectedCategory;
export default categorySlice.reducer;