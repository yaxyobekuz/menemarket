import { configureStore } from "@reduxjs/toolkit";

// Features
import userSlice from "./features/userSlice";
import modalSlice from "./features/modalSlice";
import productsSlice from "./features/productsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    products: productsSlice,
  },
});
