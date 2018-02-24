// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import {Actions} from "react-native-router-flux";
import {LOG_IN_ROUTE} from "../router/routes";
import {logOutAction} from "../redux/actions";
import {connect} from "react-redux";


type Props = {
  logOut: () => void;
};
export class LogOut extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Good Bye
        </Text>
        <Button
          style={styles.button}
          title="Log Out"
          onPress={this.onLogOut}
        />
      </View>
    );
  }

  onLogOut = () => {
    this.props.logOut();
    Actions[LOG_IN_ROUTE]();
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
  button: {
    marginVertical: 16
  },
});

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOutAction()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
