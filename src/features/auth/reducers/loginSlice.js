import { createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
      // AWS Amplify Auth API call to login
      const user = await Auth.signIn(credentials.email, credentials.password);
      dispatch(loginSuccess(user));
      console.log(user)
      return user;
    } catch (error) {
      dispatch(loginFailure(error.message));
    }

};



export default authSlice.reducer;