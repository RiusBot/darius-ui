import { createSelector } from 'reselect';

const getServiceState = (state) => state.service;

export const getPlansFromState = createSelector(getServiceState, (service) => service.plans);
export const getSubscriptionsFromState = createSelector(getServiceState, (service) => service.subscriptions);
