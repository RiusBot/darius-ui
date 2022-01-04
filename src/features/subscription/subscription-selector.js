import { createSelector } from 'reselect';

const getSubscriptionState = (state) => state.subscription;

export const getPlansFromState = createSelector(getSubscriptionState, (subscription) => subscription.plans);
export const getSubscriptionsFromState = createSelector(getSubscriptionState, (subscription) => subscription.subscriptions);
