// @flow
import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { type NavigationActions } from 'react-navigation';

import { DRAWER_ROUTE } from '../../../router';
import { styles } from './LogIn.styles';

export type Props = {
  logIn: (username: string) => void;
  navigation: NavigationActions
};

type State = {
  username: string;
  password: string;
  errors: Object;
}

const MIN_USERNAME_LENGTH = 4;
const MIN_PASSWORD_LENGTH = 6;

export class LogIn extends Component<Props, State> {
  state = {
    username: '',
    password: '',
    errors: {}
  };
  passwordInput = null;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleText}>
            Welcome
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="user"
            size={35}/>
          <TextInput
            style={this.state.errors.username ? styles.error : styles.input}
            placeholder='Username'
            returnKeyType='next'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text) => this.setState({ username: text })}
            onSubmitEditing={() => this.passwordInput && this.passwordInput.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="lock"
            size={35}/>
          <TextInput
            style={this.state.errors.password ? styles.error : styles.input}
            secureTextEntry={true}
            placeholder='Password'
            returnKeyType='go'
            ref={(input) => this.passwordInput = input}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={this.onSubmit}>
          <Text style={styles.loginButtonText}>
            Log In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  onSubmit = () => {
    const errors = {};
    if (!this.state.username || this.state.username.length < MIN_USERNAME_LENGTH) {
      errors.username = true;
    }
    if (!this.state.password || this.state.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = true;
    }
    this.setState({
      errors
    });
    if (Object.keys(errors).length > 0) {
      return;
    }
    this.performLogin();
  };

  performLogin = () => {
    this.props.logIn(this.state.username);
    this.props.navigation.replace(DRAWER_ROUTE);
    this.setState({
      username: '',
      password: '',
      errors: {}
    });
  }
}
