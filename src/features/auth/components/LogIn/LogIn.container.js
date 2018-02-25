// @flow
import { connect } from 'react-redux';

import {type Props, LogIn } from './LogIn';
import { logInAction } from '../../actions';

function mapDispatchToProps(dispatch): Props {
  return {
    logIn: (username) => dispatch(logInAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
