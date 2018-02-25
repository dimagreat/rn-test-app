import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import { LogOut, Home } from '../../auth/index'
import StackOverflow from '../../stackoverflow/StackOverflow'

const styles = StyleSheet.create({
  hamburger: {
    paddingLeft: 12,
    flex: 1,
    justifyContent: 'center',
  },
});

const HamburgerButton = ({ navigation }) => {
  function toggleDrawer() {
    navigation.navigate('DrawerToggle')
  }
  return (
    <TouchableOpacity
      style={styles.hamburger}
      activeOpacity={0.7}
      onPress={toggleDrawer}>
      <Icon name='menu' size={24}/>
    </TouchableOpacity>
  );
};

const HomePage = StackNavigator({
  HomePage: {
    name: 'HomePageStack',
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <HamburgerButton navigation={navigation}/>
      ),
    }),
  },
});

const StackOverflowPage = StackNavigator({
  StackOverflowPage: {
    name: 'StackOverflowPageStack',
    screen: StackOverflow,
    navigationOptions: ({ navigation }) => ({
      title: 'Stackoverflow',
      headerLeft: (
        <HamburgerButton navigation={navigation}/>
      ),
    })
  }
});

const LogoutPage = StackNavigator({
  LoogutPage: {
    name: 'LogoutPageStack',
    screen: LogOut,
    navigationOptions: ({ navigation }) => ({
      title: 'Log Out',
      headerLeft: (
        <HamburgerButton navigation={navigation}/>
      ),
    }),
  },
});

export default DrawerNavigator({
  HomePage: {
    screen: HomePage,
  },
  StackOverflowPage: {
    screen: StackOverflowPage,
  },
  LogoutPage: {
    screen: LogoutPage,
  },
});
