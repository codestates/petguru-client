import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules';
import rootSaga from './modules/rootSaga';
import { tempSetUser, check } from './modules/user';

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

  function loadUser() {
    try {
      const user = localStorage.getItem('user');
      if (!user) return;
      store.dispatch(tempSetUser(user));
      store.dispatch(check());
    } catch (e) {
      console.log(e);
    }
  }
  store.sagaTask = sagaMiddleware.run(rootSaga);
  loadUser();
  
  return store;
}

const wrapper =  createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;