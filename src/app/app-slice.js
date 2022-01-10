import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    snackbarInfo: {
      open: false, message: '', severity: 'info'
    },
    userProfile: {}
  },
  reducers: {
    createUser: () => {},
    createUserSuccess: () => {},
    createRecaptchaAccessment: () => {},
    createRecaptchaAccessmentSuccess: () => {},
    getUserProfile: () => {},
    getUserProfileSuccess: (state, action) => {
      state.userProfile = action.payload;
    },
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
  createUserSuccess,
  createRecaptchaAccessment,
  createRecaptchaAccessmentSuccess,
  getUserProfile,
  getUserProfileSuccess,
  updateSnackbar,
  closeSnackbar,
} = actions

export default reducer;
