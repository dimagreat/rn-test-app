// @flow
import { QUESTIONS_FETCH_REQUESTED, QUESTIONS_FETCH_SUCCESS } from './actionKeys';

export type QuestionRequestPayload = number;
export type QuestionSuccessPayload = {
  page: number;
  questions: string[];
};

export function requestQuestions(page): Action<QuestionRequestPayload> {
  return {
    type: QUESTIONS_FETCH_REQUESTED,
    payload: page,
  };
}

export function questionsFetchSuccess(page, questions): Action<QuestionSuccessPayload> {
  return {
    type: QUESTIONS_FETCH_SUCCESS,
    payload: {
      page,
      questions,
    },
  };
}
