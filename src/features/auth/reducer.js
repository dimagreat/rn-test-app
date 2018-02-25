// @flow
import { createReducer } from '../utils';
import { LOG_IN, LOG_OUT } from './actionKeys';
import type { LogInPayload } from './actions';

export type AuthState = {
  username: string;
}

export const initialState: AuthState = {
  username: '',
};

export default createReducer(initialState, {
  [LOG_IN] (state: AuthState, action: Action<LogInPayload>): AuthState {
    return {
      ...state,
      username: action.payload,
    };
  },
  [LOG_OUT] (state: AuthState) {
    return {
      ...state,
      username: '',
    };
  },
});
