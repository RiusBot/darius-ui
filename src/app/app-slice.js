import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    snackbarInfo: {
      open: false, message: '', severity: 'info'
    },
  },
  reducers: {
    createUser: () => {},
    createUserSussess: () => {},
    createRecaptchaAccessment: () => {},
    createRecaptchaAccessmentSuccess: () => {},
    updateSnackbar: (state, action) => {
      state.snackbarInfo = {
        open: true,
        message: action.payload.msg,
        severity: action.payload.type,
      };
    },
    closeSnackbar: (state) => {
      const snackbarInfo = {
        ...state.snackbarInfo,
        open: false,
        message: ''
      }
      state.snackbarInfo = snackbarInfo;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  createUser,
  createUserSussess,
  createRecaptchaAccessment,
  createRecaptchaAccessmentSuccess,
  updateSnackbar,
  closeSnackbar,
} = actions

export default reducer;
