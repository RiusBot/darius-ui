import { createSelector } from 'reselect';

const getAppState = (state) => state.app;
const getFirebaseState = (state) => state.firebase;

export const getAuthUser = createSelector(getFirebaseState, (firebase) => firebase.auth);

export const getUserProfileFromFirebase = createSelector(getFirebaseState, (firebase) => firebase.profile);

export const getUserProfile = createSelector(getAppState, (app) => app.userProfile);

export const getSnackbarInfo = createSelector(getAppState, (app) => app.snackbarInfo);

export const getUserTelegram = createSelector(getAppState, (app) => app.telegramId);