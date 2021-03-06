// @flow
import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { type NavigationActions } from 'react-navigation';

import { LOG_IN_ROUTE } from '../../../router';
import { styles } from './LogOut.styles';


export type Props = {
  logOut: () => void;
  navigation: NavigationActions;
};

export class LogOut extends Component<Props> {
  onLogOut = () => {
    this.props.logOut();
    this.props.navigation.navigate(LOG_IN_ROUTE);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Good Bye
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onLogOut}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
