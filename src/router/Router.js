import React, { Component } from 'react';
import {
  Scene,
  Router,
  Drawer,
  Stack,
} from 'react-native-router-flux';

import LogIn from '../auth/LogIn';
import LogOut from '../auth/LogOut';
import DrawerContent from './DrawerContent';
import Home from '../home/Home';
import StackOverflow from '../stackoverflow/StackOverflow';

import { LOG_IN_ROUTE, LOG_OUT_ROUTE, STACK_OVF_ROUTE, HOME_ROUTE } from './routes';

type Props = {};
export default class Router extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack
          hideNavBar
          key="root"
        >
          <Scene
            hideNavBar
            key={LOG_IN_ROUTE}
            component={LogIn}
          />
          <Drawer
            key="drawer"
            drawerWidth={200}
            drawerPosition="right"
            contentComponent={DrawerContent}
          >
            <Scene key={STACK_OVF_ROUTE} component={StackOverflow} title="Stack Overflow" />
            <Scene key={HOME_ROUTE} component={Home} title="Home" />
            <Scene key={LOG_OUT_ROUTE} component={LogOut} title="Log Out" />
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
