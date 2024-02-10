import { createSlice } from "@reduxjs/toolkit";
import { calculateShippingFee } from "../CartPage/orderSummaryHelpers";

const initialState = {
  numberOfCartItems: localStorage.getItem("numberOfCartItems") ? JSON.parse(localStorage.getItem("numberOfCartItems")) : 0,
  cartListGroup: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalAmount: sessionStorage.getItem("cartTotalAmount") ? JSON.parse(sessionStorage.getItem("cartTotalAmount")) : 0,
  cartTotalQuantity: 0,
  cartSubTotal: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartListGroup.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        //if product is already in the cartListGroup
        state.cartListGroup[productIndex].quantity += action.payload.quantity;
        state.numberOfCartItems += action.payload.quantity;
      } else if (action.payload.quantity > 1) {
        //if product is not in cartListGroup but has quantity over 1
        state.numberOfCartItems += action.payload.quantity;
        state.cartListGroup.unshift(action.payload);
      } else {
        //else add product to cartListGroup and set the quantity from 0 to 1
        state.numberOfCartItems += 1;
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartListGroup.unshift(tempProduct);
      }
      localStorage.setItem("numberOfCartItems", JSON.stringify(state.numberOfCartItems));
      localStorage.setItem("cartItems", JSON.stringify(state.cartListGroup));
    },
    removeFromCart: (state, action) => {
      state.numberOfCartItems -= action.payload.quantity;
      // Ensure numberOfCartItems does not go below 0
      state.numberOfCartItems = Math.max(0, state.numberOfCartItems);
      const productExists = state.cartListGroup.some(
        (product) => product.id === action.payload.id
      );
      if (productExists) {
        state.cartListGroup = state.cartListGroup.filter(
          (product) => product.id !== action.payload.id
        );
      }
      localStorage.setItem("numberOfCartItems", JSON.stringify(state.numberOfCartItems));
      localStorage.setItem("cartItems", JSON.stringify(state.cartListGroup));
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.cartListGroup.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartListGroup[productIndex].quantity += 1;
      state.numberOfCartItems += 1;
      localStorage.setItem("numberOfCartItems", JSON.stringify(state.numberOfCartItems));
      localStorage.setItem("cartItems", JSON.stringify(state.cartListGroup));
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.cartListGroup.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartListGroup[productIndex].quantity > 1) {
        state.cartListGroup[productIndex].quantity -= 1;
        state.numberOfCartItems -= 1;
      }
      localStorage.setItem("numberOfCartItems", JSON.stringify(state.numberOfCartItems));
      localStorage.setItem("cartItems", JSON.stringify(state.cartListGroup))
    },
    getTotals: (state) => {
      let { total, quantity } = state.cartListGroup.reduce(
        (cartTotal, product) => {
          const { price, quantity } = product;
          const totalAmount = price * quantity;

          cartTotal.total += totalAmount;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
      sessionStorage.setItem("cartTotalAmount", JSON.stringify(state.cartTotalAmount));
    },
    getSubTotal: (state, action) => {
      state.cartSubTotal = action.payload;
    },
    resetCart: (state) => {
      state.numberOfCartItems = 0;
      state.cartListGroup = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
      state.cartSubTotal = 0;
      localStorage.setItem("numberOfCartItems", JSON.stringify(state.numberOfCartItems));
      localStorage.setItem("cartItems", JSON.stringify(state.cartListGroup))
    },
  },
});

export default addToCartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  addToCartByQuantity,
  incrementQuantity,
  decrementQuantity,
  getTotals,
  getSubTotal,
  resetCart,
} = addToCartSlice.actions;
export const cartListGroupSelector = (state) => state.addToCart.cartListGroup;
export const cartTotalAmountSelector = (state) => state.addToCart.cartTotalAmount;

export const productsInCartSelector = (state) => {
  return state.addToCart.cartListGroup.map((product) => ({
    id: product.id,
    color: product.color,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: product.quantity,
  }));
};

export const orderSummarySelector = (state) => {
  return {
    cartTotalAmount: state.addToCart.cartTotalAmount,
    shippingFee: calculateShippingFee(8, 2), // Assuming a fixed weight and rate pf $2 per pound
    // couponDiscount:
    //   state.addToCart.cartTotalAmount - state.addToCart.cartSubTotal,
  };
};
