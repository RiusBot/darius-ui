import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/app/root-reducer';
import rootSaga from '@/app/root-saga';

const isProduction = process.env.NODE_ENV !== 'production';

const getMiddlewares = (middlewares) => {
  if (isProduction) {
    const { logger } = require('redux-logger'); // eslint-disable-line
    return [...middlewares, logger];
  }
  return middlewares;
};

const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer: rootReducer,
		devTools: isProduction,
		middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware({ thunk: false }).concat(getMiddlewares([sagaMiddleware]))
    ),
	});

	store.sagaTask = sagaMiddleware.run(rootSaga, store.dispatch);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
