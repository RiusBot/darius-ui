import { createSelector } from 'reselect';

const getAppState = (state) => state.app;

export const getUserInfo = createSelector(getAppState, (app) => app.userInfo);
