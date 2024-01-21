import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  name: "",
  profile_picture: "",
};

export const userSliceName = "User"

export const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      const { _id, email, name, profile_picture } = action.payload;

      return {
        ...state,
        _id,
        email,
        name,
        profile_picture,
      };
    },
    resetUser: (state) => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedIn, resetUser } = userSlice.actions;

export default userSlice.reducer;
