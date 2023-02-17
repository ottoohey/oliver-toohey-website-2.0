import { configureStore } from "@reduxjs/toolkit";
import opacityReducer from "../features/opacity/opacitySlice.js";
import homescreenReducer from "../features/homescreenAnimation/homescreenAnimationSlice.js";

export default configureStore({
  reducer: {
    opacity: opacityReducer,
    fixedPosition: homescreenReducer,
  },
});
