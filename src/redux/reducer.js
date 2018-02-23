// @flow

import { createReducer } from '../utils';
import { LOG_IN, LOG_OUT, GET_QUESTIONS } from './actionKeys';
import type { Action, LogInPayload, GetQuestionsPayload } from './actions';

type Reducer = {
  username: string;
  questions: string[]
}

export const initialState: Reducer = {
  username: '',
  questions: []
};

export default createReducer(initialState, {
  [LOG_IN] (state: Reducer, action: Action<LogInPayload>): Reducer {
    return {
      ...state,
      username: action.payload.username,
    };
  },
  [LOG_OUT] (state: Reducer) {
    return {
      ...state,
      username: '',
    };
  },
  [GET_QUESTIONS] (state: Reducer, action: Action<GetQuestionsPayload>): Reducer {
    return {
      ...state,
      questions: action.payload.questions,
    };
  },
});
