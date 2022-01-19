import { createSelector } from 'reselect';

const getDashboardState = (state) => state.dashboard;

export const getUserBots = createSelector(getDashboardState, (dashboard) => dashboard.userBots);
export const getBotTrades = createSelector(getDashboardState, (dashboard) => dashboard.userBotTrades);
