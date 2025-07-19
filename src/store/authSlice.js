import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    userStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    userFailure: (state, action) => {
      console.log("Error in authSlice:", action.payload);
      state.loading = false;
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.loading = false;
      state.error = null;
      state.user = null;
    },
  },
});

export const { userStart, userFailure, addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
