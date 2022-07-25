import { createSelector } from 'reselect';

const getNotifyState = (state) => state.notify;

export const getUserNotify = createSelector(getNotifyState, (notify) => notify.config);
