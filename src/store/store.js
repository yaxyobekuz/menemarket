import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modalSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
  },
});
