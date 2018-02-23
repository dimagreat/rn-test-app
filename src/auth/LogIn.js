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

type Props = {};
class LogIn extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN</Text>
        <TouchableHighlight onPress={this.logIn}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  logIn () {
    this.props.logIn();
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
    logIn: () => dispatch(logInAction()),
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
