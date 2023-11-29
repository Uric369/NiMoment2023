import { createSlice } from "@reduxjs/toolkit";

export const nimoerSlice = createSlice({
  name: "nimoer",
  initialState: {
    nimoerInfo: {
      id: 0,
      name: ""
    },
    isRetired: false
  },
  reducers: {
    setNimoerInfo: (state, action) => {
      state.nimoerInfo = action.payload
    },
    setIsRetired: (state, action) => {
      state.isRetired = action.payload
    }
  }
})

export const { setNimoerInfo, setIsRetired } = nimoerSlice.actions

export default nimoerSlice.reducer
