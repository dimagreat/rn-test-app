// @flow
import { LogOut } from './LogOut';
import type { Props } from './LogOut';
import { logOutAction } from '../../actions';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch): Props {
  return {
    logOut: () => dispatch(logOutAction()),
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
