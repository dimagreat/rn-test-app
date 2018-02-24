// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from "react-redux";


type Props = {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 32
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


function mapStateToProps({ username }) {
  return {
    username,
  }
}

export default connect(mapStateToProps)(Home)
