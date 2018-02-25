// @flow
import { connect } from 'react-redux';

import { Home } from './Home';
import type { Props } from './Home';

function mapStateToProps(state: AppState): Props {
  return {
    username: state.auth.username,
  }
}

export default connect(mapStateToProps)(Home)
