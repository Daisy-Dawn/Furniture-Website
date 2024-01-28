import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCartItems: 0,
    cartListGroup: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    cartSubTotal: 0
}

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productIndex = state.cartListGroup.findIndex(product => product.id === action.payload.id);
            if(productIndex >= 0){ 
                //if product is already in the cartListGroup
                state.cartListGroup[productIndex].quantity += action.payload.quantity;
                state.numberOfCartItems += action.payload.quantity;
            }else if(action.payload.quantity > 1){ 
                //if product is not in cartListGroup but has quantity over 1
                state.numberOfCartItems += action.payload.quantity;
                state.cartListGroup.unshift(action.payload);
            }else{
                //else add product to cartListGroup and set the quantity from 0 to 1
                state.numberOfCartItems += 1;
                const tempProduct = {...action.payload, quantity: 1};
                state.cartListGroup.unshift(tempProduct);
            }
        },
        removeFromCart: (state, action) => {
            state.numberOfCartItems -= action.payload.quantity;
            // Ensure numberOfCartItems does not go below 0
            state.numberOfCartItems = Math.max(0, state.numberOfCartItems);
            const productExists = state.cartListGroup.some(product => product.id === action.payload.id);
            if(productExists){
                state.cartListGroup = state.cartListGroup.filter(product => product.id !== action.payload.id);
            }
        },
        incrementQuantity: (state, action) => {
            const productIndex = state.cartListGroup.findIndex(product => product.id === action.payload.id);
            state.cartListGroup[productIndex].quantity += 1;
            state.numberOfCartItems += 1;
        },
        decrementQuantity: (state, action) => {
            const productIndex = state.cartListGroup.findIndex(product => product.id === action.payload.id);
            if(state.cartListGroup[productIndex].quantity > 1){
                state.cartListGroup[productIndex].quantity -= 1;
                state.numberOfCartItems -= 1;

            }
        },
        getTotals: (state) => {
           let {total, quantity} = state.cartListGroup.reduce((cartTotal, product)=>{
                const {price, quantity} = product;
                const totalAmount = price * quantity;

                cartTotal.total += totalAmount;
                cartTotal.quantity += quantity;

                return cartTotal;
            },{
                total: 0,
                quantity: 0
            })

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        getSubTotal: (state, action) => {
            state.cartSubTotal = action.payload;
        }
    }
})

export default addToCartSlice.reducer;
export const { addToCart, removeFromCart, addToCartByQuantity, incrementQuantity, decrementQuantity, getTotals, getSubTotal } = addToCartSlice.actions;
export const cartListGroupSelector = state => state.addToCart.cartListGroup;
export const cartTotalAmountSelector = state => state.addToCart.cartTotalAmount;