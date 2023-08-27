import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    auth: authReducer,
    product: productSlideReducer,
  },
});
