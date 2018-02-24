import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from './router/Router';
import configureStore from './redux/store';

const store = configureStore();

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
