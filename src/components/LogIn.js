// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import { HOME_ROUTE } from '../router/routes';
import { logInAction } from '../redux/actions';

type Props = {
  logIn: (username: string) => void;
};

class LogIn extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN</Text>
        <TouchableHighlight onPress={this.onLogIn}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onLogIn = () => {
    this.props.logIn('default');
    Actions[HOME_ROUTE]();
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

function mapDispatchToProps(dispatch) {
  return {
    logIn: (username) => dispatch(logInAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
