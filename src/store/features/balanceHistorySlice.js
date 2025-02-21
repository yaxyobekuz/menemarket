import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  data: null,
};

export const balanceHistorySlice = createSlice({
  name: "balance-history",
  initialState,
  reducers: {
    updateBalanceHistory: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateBalanceHistory } = balanceHistorySlice.actions;

export default balanceHistorySlice.reducer;
