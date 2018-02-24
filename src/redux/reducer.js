// @flow

import { createReducer } from '../utils';
import { LOG_IN, LOG_OUT, GET_QUESTIONS } from './actionKeys';
import type { Action, LogInPayload, GetQuestionsPayload } from './actions';

export type AppState = {
  username: string;
  questions: string[]
}

export const initialState: AppState = {
  username: '',
  questions: []
};

export default createReducer(initialState, {
  [LOG_IN] (state: AppState, action: Action<LogInPayload>): AppState {
    return {
      ...state,
      username: action.payload.username,
    };
  },
  [LOG_OUT] (state: AppState) {
    return {
      ...state,
      username: '',
    };
  },
  [GET_QUESTIONS] (state: AppState, action: Action<GetQuestionsPayload>): AppState {
    return {
      ...state,
      questions: action.payload.questions,
    };
  },
});
