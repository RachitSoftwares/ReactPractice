import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetails: {
    userName: "",
  },
};

export const loginSlice = createSlice({
  name: "loginDetails",
  initialState,
  reducers: {
    saveLoginDetails: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});

export const { saveLoginDetails } = loginSlice.actions;
export default loginSlice.reducer;
