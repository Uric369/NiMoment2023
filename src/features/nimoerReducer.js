import { createSlice } from "@reduxjs/toolkit";

export const nimoerSlice = createSlice({
  name: "nimoer",
  initialState: {
    nimoerInfo: {
      id: 0,
      name: "",
    },
    isRetired: null,
    signInOut: {
      signIn: null,
      signOut: null,
    },
  },
  reducers: {
    setNimoerInfo: (state, action) => {
      state.nimoerInfo = action.payload;
    },
    setIsRetired: (state, action) => {
      state.isRetired = action.payload;
    },
    setSignInOut: (state, action) => {
      state.signInOut = action.payload;
    },
  },
});

export const { setNimoerInfo, setIsRetired, setSignInOut } = nimoerSlice.actions;

export default nimoerSlice.reducer;
