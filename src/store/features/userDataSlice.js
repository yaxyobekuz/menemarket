import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  data: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
