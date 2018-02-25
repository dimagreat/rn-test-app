import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LogIn } from '../../auth/index';
import Drawer from './Drawer';
import { LOG_IN_ROUTE, DRAWER_ROUTE } from '../routes'

export default StackNavigator(
  {
    [LOG_IN_ROUTE]: {
      screen: LogIn,
    },
    [DRAWER_ROUTE]: {
      screen: Drawer,
    },
  },
  {
    headerMode: 'none',
  }
);
