import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userSliceName } from "./user";
import clientReducer, {clientSliceName} from "./client"

export const store = configureStore({
  reducer: {
    [userSliceName] : userReducer,
    [clientSliceName]: clientReducer

  },
  devTools: true,
});

