export interface AuthSliceState {
  loggedIn: boolean;
  message?: any;
  user: {
    fullName: string;
    image: string;
    email: string;
  };
  authToken: any;
  requestStatus: string;
  tokenLoginError?: any;
}
