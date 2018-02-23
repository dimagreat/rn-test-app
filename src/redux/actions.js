// @flow
import { LOG_IN, LOG_OUT, GET_QUESTIONS } from './actionKeys';

export type Action<T> = {
  type: string;
  payload: T;
}

export type LogInPayload = {username: string};
export type GetQuestionsPayload = {questions: string[]};

export function logInAction(username: string): Action<LogInPayload> {
  return {
    type: LOG_IN,
    payload: {
      username
    }
  }
}

export function logOutAction(): Action<null> {
  return {
    type: LOG_OUT,
    payload: null
  }
}

export function getQuestionsAction(questions: string[]): Action<GetQuestionsPayload> {
  return {
    type: LOG_OUT,
    payload: {
      questions
    }
  }
}

