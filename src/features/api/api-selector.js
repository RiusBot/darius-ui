import { createSelector } from 'reselect';

const getApiState = (state) => state.api;

export const getUserApi = createSelector(getApiState, (api) => api.userApi);
