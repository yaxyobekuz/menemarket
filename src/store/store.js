import { configureStore } from "@reduxjs/toolkit";

// Features
import userSlice from "./features/userSlice";
import modalSlice from "./features/modalSlice";
import streamsSlice from "./features/streamsSlice";
import productsSlice from "./features/productsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    streams: streamsSlice,
    products: productsSlice,
  },
});
