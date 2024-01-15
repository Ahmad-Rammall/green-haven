import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  _id: "",
  email: "",
  username: "",
  profilePicture: "",
  bio: "",
  phoneNumber: "",
  location: "",
  role: "",
  garden: [],
  cart: [],
  following: [],
  followers: [],
};

export const userSliceName = "User";

export const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      const {
        token,
        streamToken,
        _id,
        email,
        username,
        profilePicture,
        bio,
        phoneNumber,
        location,
        role,
        garden,
        cart,
        following,
        followers,
      } = action.payload;

      return {
        ...state,
        token,
        streamToken,
        _id,
        email,
        username,
        profilePicture,
        bio,
        phoneNumber,
        location,
        role,
        garden,
        cart,
        following,
        followers,
      };
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.cart = [...state.cart, newItem];
    },
    cleanData: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { loggedInUser, cleanData } = userSlice.actions;

export default userSlice.reducer;
