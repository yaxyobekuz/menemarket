import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  data: [],
  hasError: false,
  isLoading: true,
};

export const homeProductsSlice = createSlice({
  name: "homepage-products",
  initialState,
  reducers: {
    updateHomeProducts: (state, action) => {
      state.data = action.payload;
    },

    updateHomeProductsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    updateHomeProductsError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

export const {
  updateHomeProducts,
  updateHomeProductsError,
  updateHomeProductsLoading,
} = homeProductsSlice.actions;

export default homeProductsSlice.reducer;
