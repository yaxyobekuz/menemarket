import { configureStore } from "@reduxjs/toolkit";

// Features
import modalSlice from "./features/modalSlice";
import userDataSlice from "./features/userDataSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    userData: userDataSlice,
  },
});
