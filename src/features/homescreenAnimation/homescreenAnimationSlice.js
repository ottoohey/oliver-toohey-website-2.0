import { createSlice } from "@reduxjs/toolkit";

export const homescreenAnimationSlice = createSlice({
  name: "fixedPosition",
  initialState: {
    value: false,
  },
  reducers: {
    position: (state, action) => {
      if (action.payload <= 0) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

export const { position } = homescreenAnimationSlice.actions;

export default homescreenAnimationSlice.reducer;
