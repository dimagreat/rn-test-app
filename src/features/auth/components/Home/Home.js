// @flow
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { styles } from './Home.styles';

export type Props = {
  username: string;
};

export class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {`Hello, ${this.props.username}!`}
        </Text>
      </View>
    );
  }
}
