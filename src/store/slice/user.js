import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    userName: "",
    mobileNo: "",
    emailId: "",
  },
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
    getUserListRequest : ()=>{},
    getUserListRequestSuccess : ()=>{},
    getUserListRequestFailure : ()=>{}
  },
});

export const { setUserList,getUserListRequest,getUserListRequestSuccess,getUserListRequestFailure } = userSlice.actions;
export default userSlice.reducer;
