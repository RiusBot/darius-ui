import { combineReducers } from 'redux';
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import appReducer from '@/app/app-slice';
import dashboardReducer from '@/features/dashboard/dashboard-slice';
import apiReducer from '@/features/api/api-slice';
import subscriptionReducer from '@/features/subscription/subscription-slice';
import transactionReducer from '@/features/transaction/transaction-slice';
import productReducer from '@/features/product/product-slice';

const combined = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  app: appReducer,
  dashboard: dashboardReducer,
  api: apiReducer,
  subscription: subscriptionReducer,
  transaction: transactionReducer,
  product: productReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return produce(state, () => action.payload);
  }
  return combined(state, action);
};

export default rootReducer;
