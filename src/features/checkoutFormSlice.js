import { createSlice } from "@reduxjs/toolkit";

export const setCheckoutFormData = (checkoutFormData) => {
  return {
    type: "SET_FORM_DATA",
    payload: checkoutFormData,
  };
};

const initialState = {
  totalPayment: 0, // Add totalPayment to the initial state
};

const checkoutFormSlice = createSlice({
  name: "checkoutForm",
  initialState,
  reducers: {
    setTotalPayment: (state, action) => {
      state.totalPayment = action.payload;
    },
  },
});

export const { setTotalPayment } = checkoutFormSlice.actions;
export default checkoutFormSlice.reducer;
