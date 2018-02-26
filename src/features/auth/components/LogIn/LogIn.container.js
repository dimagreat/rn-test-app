// @flow
import { connect } from 'react-redux';

import { LogIn } from './LogIn';
import { logInAction } from '../../actions';

type StateProps = {
  logIn: (username: string) => void;
}

function mapDispatchToProps(dispatch): StateProps {
  return {
    logIn: (username: string) => dispatch(logInAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
