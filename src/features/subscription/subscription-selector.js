import { createSelector } from 'reselect';

const getSubscriptionState = (state) => state.subscription;

export const getPlans = createSelector(getSubscriptionState, (subscription) => subscription.plans);
export const getSubscriptions = createSelector(getSubscriptionState, (subscription) => subscription.subscriptions);
export const getSubscriptionInfo = createSelector(getSubscriptionState, (subscription) => subscription.info);
