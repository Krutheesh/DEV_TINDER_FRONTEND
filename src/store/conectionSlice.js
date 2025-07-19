import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    connectionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addConnections: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    connectionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeConnections: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  connectionsStart,
  addConnections,
  connectionsFailure,
  removeConnections,
} = connectionsSlice.actions;

export default connectionsSlice.reducer;
