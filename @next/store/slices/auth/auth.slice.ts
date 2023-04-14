/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */
import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from './auth.types';
import { loginAdmin, loginInWithToken } from './auth-api';
import { REQUEST_STATUS } from '@next/constants';

export const authInitialState: AuthSliceState = {
  loggedIn: false,
  message: null,
  user: {
    fullName: '',
    image: '',
    email: '',
  },
  authToken: null,
  requestStatus: REQUEST_STATUS.IDEL,
  tokenLoginError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logout(state: any) {
      state.user = authInitialState.user;
      state.loggedIn = false;
      state.authToken = '';
      localStorage.clear();
    },
    setUser(state: any, action: any) {
      state.user = action.payload;
    },
    setErrorDialog(state: any, action: any) {
      state.tokenLoginError = action.payload;
    },
  },

  extraReducers: (builder) => {
    // START LOGIN ADMIN PANEL
    builder.addCase(loginAdmin.fulfilled, (state, action: any) => {
      const { data, status } = action?.payload;
      state.requestStatus = REQUEST_STATUS.SUCCESS;
      state.authToken = data?.data?.accessToken;
      state.user = data?.data?.user;
      localStorage.setItem('accessToken', data?.data?.accessToken);
    });
    builder.addCase(loginAdmin.pending, (state, action) => {
      state.requestStatus = REQUEST_STATUS.LOADING;
    });
    builder.addCase(loginAdmin.rejected, (state, error) => {
      state.requestStatus = REQUEST_STATUS.FAILURE;
    });
    // END LOGIN ADMIN PANEL

    // START LOGIN WITH TOKEN ADMIN PANEL
    builder.addCase(loginInWithToken.fulfilled, (state, action: any) => {
      const { data } = action?.payload;
      state.tokenLoginError = false;
      state.requestStatus = REQUEST_STATUS.SUCCESS;
      state.user = data;
    });
    builder.addCase(loginInWithToken.pending, (state, action) => {
      state.requestStatus = REQUEST_STATUS.LOADING;
    });
    builder.addCase(loginInWithToken.rejected, (state, action) => {
      const { message } = action?.error;
      state.message = message || 'Something Went Wrong';
      state.tokenLoginError = true;
      state.requestStatus = REQUEST_STATUS.FAILURE;
    });
    // END LOGIN WITH TOKEN ADMIN PANEL
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
