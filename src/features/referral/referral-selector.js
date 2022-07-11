import { createSelector } from 'reselect';

const getReferralState = (state) => state.referral;

export const getUserReferral = createSelector(getReferralState, (referral) => referral.userReferral);
export const getUserReferralHistory = createSelector(getReferralState, (referral) => referral.userReferralHistory);
