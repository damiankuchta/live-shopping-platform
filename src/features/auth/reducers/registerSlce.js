import { createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import { push } from "redux-first-history";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export const register = (credentials) => async (dispatch) => {

  try {
    dispatch(registerStart());
    const user = await Auth.signUp({
      username: credentials.username,
      password: credentials.password,
      attributes: {
        birthdate: "",
        name: "",
        family_name: "",
        address: "",
        gender: "",
        profile: "",
        website: "",
        locale: "",
        preferred_username: credentials.preferred_username,
        phone_number: "",
        picture: "",
      }});
    dispatch(registerSuccess(user.username));
    dispatch(push('/register-success'));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default registerSlice.reducer;