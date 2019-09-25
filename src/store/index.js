import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import { getCountries } from '../actions/countriesActions';

import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  )
);

export default store;

store.dispatch(getCountries());
