import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { publicUrl, privateUrl } from '@hooks';
import jwtDecode from 'jwt-decode';
import {
  apiGetRequest,
  apiPutRequest,
  apiDeleteRequest,
  apiPostRequest,
  apiPatchRequest,
} from '@next/helpers';
import { endpoints } from '@config';

export const loginAdmin = createAsyncThunk(
  'admin/login',
  async ({ email, password }: { email: string; password: string }) => {
    return await apiPostRequest(endpoints.authLogin, { email, password }).then(
      (res) => Promise.resolve(res),
    );
  },
);

export const loginInWithToken = createAsyncThunk(
  'admin/loginWithToken',
  async () => {
    return await apiGetRequest(endpoints.silentLogin).then((res) =>
      Promise.resolve(res),
    );
  },
);

const getAccessToken = () => localStorage.getItem('accessToken');

const isValidToken = (accessToken: any) => {
  if (!accessToken) {
    return false;
  }
  const decoded: any = jwtDecode(accessToken);
  const currentTime: any = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const setSession = (accessToken: any) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
  }
};

export const isAuthenticated = () => !!getAccessToken();

export const handleAuthentication = () => {
  let accessToken = getAccessToken();
  if (!accessToken) {
    return;
  }
  if (isValidToken(accessToken)) {
    setSession(accessToken);
  } else {
    setSession(null);
  }
};

export const setAxiosInterceptors = ({ onLogout }: { onLogout: any }) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        setSession(null);
        if (onLogout) {
          onLogout();
        }
      } else if (
        error?.response?.status == 400 ||
        error?.response?.status == 404
      ) {
        return Promise.reject(error?.response?.data?.message);
      } else {
        return Promise.reject('Something Went Wrong');
      }
    },
  );
};
