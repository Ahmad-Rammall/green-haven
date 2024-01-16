import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {}
};

export const clientSliceName = "Client";

export const clientSlice = createSlice({
  name: clientSliceName,
  initialState,
  reducers: {
    loggedInClient: (state, action) => {
      const {
        client
      } = action.payload;

      return {
        ...state,
        client
      };
    },
    cleanData: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { loggedInClient, cleanData } = clientSlice.actions;

export default clientSlice.reducer;
