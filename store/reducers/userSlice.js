import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userInfo: {
    user_id: null,
    email: null,
    display_name: null,
    first_name: null,
    last_name: null,
    pictureUrl: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload; // Payload will hold user date like name
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = {
        user_id: null,
        first_name: null,
        last_name: null,
        pictureUrl: null,
      };
    },
  },
  devTools: true, // Enable DevTools
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
