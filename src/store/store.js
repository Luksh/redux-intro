import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";

export const reduxStore = configureStore({
  reducer: { counter: counterReducer },
});
