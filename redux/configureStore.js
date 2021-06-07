import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules';
import rootSaga from './modules/rootSaga';

const logger = createLogger();

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(
    rootReducer,
    enhancer,
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;