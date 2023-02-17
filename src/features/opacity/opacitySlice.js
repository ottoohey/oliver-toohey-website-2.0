import { createSlice } from "@reduxjs/toolkit";

export const opacitySlice = createSlice({
  name: "opacityArray",
  initialState: {
    value: [false, false, false, false, false, false],
  },
  reducers: {
    transition: (state, action) => {
      if (state.value[action.payload]) {
        state.value[action.payload] = false;
      } else {
        state.value[action.payload] = true;
      }
    },
  },
});

export const { transition } = opacitySlice.actions;

export default opacitySlice.reducer;
