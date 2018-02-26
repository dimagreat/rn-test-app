// @flow
import { QUESTIONS_FETCH_REQUESTED, QUESTIONS_FETCH_SUCCESS } from './actionKeys';

export type QuestionRequestPayload = number;
export type QuestionSuccessPayload = {
  questions: string[];
  pagination: {
    page: number,
    hasNext: boolean;
  };
};

export function requestQuestions(page: number): Action<QuestionRequestPayload> {
  return {
    type: QUESTIONS_FETCH_REQUESTED,
    payload: page,
  };
}

export function questionsFetchSuccess(data: QuestionSuccessPayload): Action<QuestionSuccessPayload> {
  return {
    type: QUESTIONS_FETCH_SUCCESS,
    payload: {
      questions: data.questions,
      pagination: data.pagination,
    },
  };
}
