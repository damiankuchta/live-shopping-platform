import { Auth } from 'aws-amplify';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  sessionInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.sessionInfo = null;
    },
    startSignUp(state) {
      state.loading = true;
      state.error = null;
      state.user = null;
      state.isAuthenticated = false;
      state.sessionInfo = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.error = null;
      state.user = action.payload.user;
      state.isLoading = false;
      state.sessionInfo = action.payload.session
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.user = null;
      state.isLoading = false;
      state.sessionInfo = null;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.user = null;
      state.isLoading = false;
      state.sessionInfo = null;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.sessionInfo = null;
    },
    userNotAuthenticated: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      state.user = null;
      state.isLoading = false;
      state.sessionInfo = null;
    },
    userAuthenticated: (state, action) => {
      state.isAuthenticated = true;
      state.error = null;
      state.user = action.payload.user;
      state.isLoading = false;
      state.sessionInfo = action.payload.session;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
      state.isAuthenticated = false;
      state.sessionInfo = null;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.isAuthenticated = false;
      state.sessionInfo = null;
    }


  },
});

export const { loginSuccess, loginFailure, logoutSuccess, logoutFailure, userNotAuthenticated, 
  userAuthenticated, startLogin, startSignUp, signUpFailure, signUpSuccess } = authSlice.actions;


  //todo: add error handling
  //todo: add server error display
    export const login = (credentials) => async (dispatch) => {
  try {
      dispatch(startLogin());
      const user = await Auth.signIn(credentials.username, credentials.password);
      const session = await Auth.currentSession();
      dispatch(loginSuccess({user: JSON.stringify(user), session: JSON.stringify(session)}));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }

};

export const logOut = () => async (dispatch) => {
  try {
    await Auth.signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
}


export const isUserAuthenticated = () => async (dispatch) => {
  try {

      const user = await Auth.currentAuthenticatedUser();
      const session = await Auth.currentSession();

      dispatch(userAuthenticated({user: JSON.stringify(user), session: JSON.stringify(session)}));
    } catch (error) {
      dispatch(userNotAuthenticated());
    }
}

export const signUp = (credentials) => async (dispatch) => {

  try {
    dispatch(startSignUp());
    const user = await Auth.signUp({
      username: credentials.username,
      password: credentials.password,
      attributes: {
        birthdate: "",
        name: "",
        family_name: "",
        address: "",
        gender: "",
        locale: "",
        preferred_username: credentials.preferred_username,
        phone_number: "",
      }});
    dispatch(signUpSuccess(JSON.stringify(user)));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};
export default authSlice.reducer;