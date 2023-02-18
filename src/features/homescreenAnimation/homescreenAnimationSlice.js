import { createSlice } from "@reduxjs/toolkit";

export const homescreenAnimationSlice = createSlice({
  name: "fixedPosition",
  initialState: {
    value: [false, false],
  },
  reducers: {
    position: (state, action) => {
      if (action.payload[0] <= 0 && action.payload[1] >= 32) {
        state.value = [true, false];
      } else if (action.payload[1] <= 32) {
        state.value = [false, true];
      } else {
        state.value = [false, false];
      }
    },
  },
});

export const { position } = homescreenAnimationSlice.actions;

export default homescreenAnimationSlice.reducer;
