// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import { LOG_IN_ROUTE, LOG_OUT_ROUTE, STACK_OVF_ROUTE, HOME_ROUTE } from '../routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={Actions[HOME_ROUTE]}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions[STACK_OVF_ROUTE]}>
          <Text>
            StackOverflow
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions[LOG_OUT_ROUTE]}>
          <Text>
            Log Out
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions[LOG_IN_ROUTE]}>
          <Text>
            Log In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
