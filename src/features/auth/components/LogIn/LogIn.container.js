// @flow
import { connect } from 'react-redux';

import { LogIn } from './LogIn';
import { logInAction } from '../../actions';
import type { Props } from './LogIn';

function mapDispatchToProps(dispatch): Props {
  return {
    logIn: (username) => dispatch(logInAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
