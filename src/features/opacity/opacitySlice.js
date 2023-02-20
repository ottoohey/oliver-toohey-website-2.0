import { createSlice } from "@reduxjs/toolkit";

export const opacitySlice = createSlice({
  name: "opacityArray",
  initialState: {
    value: [false, false, false, false, false, false],
    mobileValues: [true, false, false, false, false, false],
    previousMobileValue: 0,
    promptBool: false,
  },
  reducers: {
    transition: (state, action) => {
      state.promptBool = true;
      if (state.value[action.payload]) {
        state.value[action.payload] = false;
      } else {
        state.value[action.payload] = true;
      }
    },
    sliderTransition: (state, action) => {
      switch (action.payload) {
        case 1:
          state.mobileValues = [false, true, false, false, false, false];
          state.previousMobileValue = 1;
          break;
        case 2:
          state.mobileValues = [false, false, true, false, false, false];
          state.previousMobileValue = 2;
          break;
        case 3:
          state.mobileValues = [false, false, false, true, false, false];
          state.previousMobileValue = 3;
          break;
        case 4:
          state.mobileValues = [false, false, false, false, true, false];
          state.previousMobileValue = 4;
          break;
        case 5:
          state.mobileValues = [false, false, false, false, false, true];
          state.previousMobileValue = 5;
          break;
        default:
          state.mobileValues = [true, false, false, false, false, false];
          state.previousMobileValue = 0;
          break;
      }
    },
  },
});

export const { transition, sliderTransition } = opacitySlice.actions;

export default opacitySlice.reducer;
