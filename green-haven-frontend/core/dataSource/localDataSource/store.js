import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userSliceName } from "./user";

export const store = configureStore({
  reducer: {
    [userSliceName] : userReducer
  },
  devTools: true,
});

store.subscribe(() => {
  console.log('Updated State:', store.getState());
});
