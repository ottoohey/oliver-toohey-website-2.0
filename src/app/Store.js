import { configureStore } from "@reduxjs/toolkit";
import opacityReducer from "../features/opacity/opacitySlice.js";

export default configureStore({
  reducer: {
    opacity: opacityReducer,
  },
});
