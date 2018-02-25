// @flow
import { type Props, LogOut } from './LogOut';
import { logOutAction } from '../../actions';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch): Props {
  return {
    logOut: () => dispatch(logOutAction()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
