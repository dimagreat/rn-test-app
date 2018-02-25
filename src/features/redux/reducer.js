// @flow
import { combineReducers } from 'redux';

import { authReducer } from '../auth';
import { questionsReducer } from '../stackoverflow';

export default combineReducers({
  auth: authReducer,
  questions: questionsReducer,
});
