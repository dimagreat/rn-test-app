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

import * as routes from './routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={Actions[routes.HOME]}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions[routes.STACK_OVF]}>
          <Text>
            StackOverflow
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions[routes.SIGN_IN]}>
          <Text>
            Sign In
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
