// @flow
import { connect } from 'react-redux';

import { type Props, Home } from './Home';

function mapStateToProps(state: AppState): Props {
  return {
    username: state.auth.username,
  }
}

export default connect(mapStateToProps)(Home)
