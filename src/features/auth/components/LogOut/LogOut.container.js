// @flow
import { LogOut } from './LogOut';
import { logOutAction } from '../../actions';
import { connect } from 'react-redux';

type StateProps = {
  logOut: () => void;
}

function mapDispatchToProps(dispatch): StateProps {
  return {
    logOut: () => dispatch(logOutAction()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
