import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1 },
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
    decrementCount: (state, action) => {
      state.count = state.count - 1;
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCount, decrementCount, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
