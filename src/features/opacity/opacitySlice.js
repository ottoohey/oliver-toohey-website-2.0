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
    // transitionToOpaque: (state, action) => {
    //   state.value[action.payload] = true;
    //   console.log(state.value);
    // },
    // transitionToClear: (state, action) => {
    //   state.value[action.payload] = false;
    //   console.log(state.value);
    // },
  },
});

export const { transition } = opacitySlice.actions;

export default opacitySlice.reducer;
