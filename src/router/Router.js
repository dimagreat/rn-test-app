import React, { Component } from 'react';
import {
  Scene,
  Router,
  Drawer,
  Stack,
} from 'react-native-router-flux';

import LogIn from '../auth/LogIn';
import DrawerContent from './DrawerContent';
import Home from '../home/Home';
import StackOverflow from '../stackoverflow/StackOverflow';

import * as routes from './routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack
          hideNavBar
          key="root"
        >
          <Scene
            hideNavBar
            key={routes.LOG_IN_ROUTE}
            component={LogIn}
          />
          <Drawer
            key="drawer"
            drawerWidth={200}
            drawerPosition="right"
            contentComponent={DrawerContent}
          >
            <Scene key={routes.STACK_OVF_ROUTE} component={StackOverflow} title="Stack Overflow" />
            <Scene key={routes.HOME_ROUTE} component={Home} title="Home" />
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
