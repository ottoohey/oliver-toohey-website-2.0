import { createSlice } from "@reduxjs/toolkit";

const defaultBuffer = 128;

export const HomescreenAnimationSlice = createSlice({
  name: "fixedPosition",
  initialState: {
    paddingEnabled: false,
    value: [false, false, false, false, false],
  },
  reducers: {
    position: (state, action) => {
      if (
        action.payload[0] <= 0 &&
        action.payload[1] >= defaultBuffer &&
        action.payload[2] >= defaultBuffer &&
        action.payload[3] >= defaultBuffer
      ) {
        state.value = [true, false, false, false, false];
        state.paddingEnabled = true;
      } else if (
        action.payload[1] <= defaultBuffer &&
        action.payload[2] >= defaultBuffer &&
        action.payload[3] >= defaultBuffer
      ) {
        state.value = [false, true, false, false, false];
      } else if (
        action.payload[2] <= defaultBuffer &&
        action.payload[3] >= defaultBuffer
      ) {
        state.value = [false, false, true, false, false];
      } else if (action.payload[3] <= -350) {
        state.value = [false, false, false, false, true];
      } else if (action.payload[3] <= defaultBuffer) {
        state.value = [false, false, false, true, false];
      } else {
        state.value = [false, false, false, false];
        state.paddingEnabled = false;
      }
    },
  },
});

export const { position, padding } = HomescreenAnimationSlice.actions;

export default HomescreenAnimationSlice.reducer;
