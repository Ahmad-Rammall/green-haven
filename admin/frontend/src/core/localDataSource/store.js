import { configureStore } from '@reduxjs/toolkit'
import userReducer, {userSliceName} from "./User"

export const store = configureStore({
  reducer: {
    [userSliceName]: userReducer
  },
  devTools: true,
})