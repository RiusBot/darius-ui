import { createSelector } from 'reselect';

const getDashboardState = (state) => state.dashboard;

export const getUserBotsFromState = createSelector(getDashboardState, (dashboard) => dashboard.userBots);
