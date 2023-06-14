import { createSlice } from "@reduxjs/toolkit";
import { loginThunk,logoutThunk,profileThunk,updateUserThunk,registrationThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
     state.loading = false;
     state.error = null;
   },
   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
    state.loading = false;
     state.error = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
        state.loading = false;
     state.error = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
        state.loading = false;
     state.error = null;
    },
    [registrationThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
        state.loading = false;
     state.error = null;
    },
 },
});
export default authSlice.reducer;