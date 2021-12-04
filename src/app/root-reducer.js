import { combineReducers } from 'redux';
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import appReducer from '@/app/app-slice';
import dashboardReducer from '@/features/dashboard/dashboard-slice';

const combined = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  app: appReducer,
  dashboard: dashboardReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return produce(state, () => action.payload);
  }
  return combined(state, action);
};

export default rootReducer;
