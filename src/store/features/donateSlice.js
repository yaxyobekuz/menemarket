import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  data: [],
  totalAmount: 0,
};

export const donateSlice = createSlice({
  name: "donate",
  initialState,
  reducers: {
    updateDonates: (state, action) => {
      state.data = action.payload;
    },

    updateDonatesTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export const { updateDonates, updateDonatesTotalAmount } = donateSlice.actions;

export default donateSlice.reducer;
