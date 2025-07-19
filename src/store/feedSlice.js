import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    feedStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addFeed: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    feedFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFeed: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
    removeUserFromFeed: (state, action) => {
      if (!state.data) return;
      state.data = state.data.filter((user) => user._id !== action.payload);
    },
  },
});

export const {
  feedStart,
  addFeed,
  feedFailure,
  removeFeed,
  removeUserFromFeed, // ✅ Add this export
} = feedSlice.actions;

export default feedSlice.reducer;
