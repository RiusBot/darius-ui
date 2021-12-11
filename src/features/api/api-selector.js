import { createSelector } from 'reselect';

const getApiState = (state) => state.api;

export const getUserApiFromState = createSelector(getApiState, (api) => api.userApi);
