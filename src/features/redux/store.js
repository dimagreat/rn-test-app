// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from './reducer';
import saga from './saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(saga);
  return store;
}
