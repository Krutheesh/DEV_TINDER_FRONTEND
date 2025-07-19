import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addRequests: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    requestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeRequest: (state, action) => {
      state.data = state.data.filter((req) => req._id !== action.payload);
    },
  },
});

export const { requestStart, addRequests, requestFailure, removeRequest } =
  requestSlice.actions;

export default requestSlice.reducer;
