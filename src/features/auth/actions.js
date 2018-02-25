// @flow
import { LOG_IN, LOG_OUT } from './actionKeys';

export type LogInPayload = string;

export function logInAction(username: string): Action<LogInPayload> {
  return {
    type: LOG_IN,
    payload: username
  }
}

export function logOutAction(): Action<null> {
  return {
    type: LOG_OUT,
    payload: null
  }
}

