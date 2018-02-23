import React, { Component } from 'react';
import { createStoreб applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
// import { composeWithDevTools } from 'remote-redux-devtools';


import Router from './router/Router';
import reducer from './redux/reducer';

const store = createStore(reducer, devToolsEnhancer());

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}
