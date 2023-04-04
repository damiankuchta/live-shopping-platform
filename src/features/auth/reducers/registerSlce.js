import { createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';


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
    const user = await Auth.signUp(credentials);
    dispatch(registerSuccess(user.username));
    return user;
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default registerSlice.reducer;