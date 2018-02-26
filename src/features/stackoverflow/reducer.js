// @flow

import {
  QUESTIONS_FETCH_REQUESTED,
  QUESTIONS_FETCH_SUCCESS,
} from './actionKeys';
import { createReducer } from '../utils';
import { type QuestionSuccessPayload } from './actions';

type QuestionsState = {
  isLoading: boolean;
  questions: string[];
  pagination: {
    page: number;
    hasNext: boolean;
  }
}

const initialState: QuestionsState = {
  isLoading: false,
  questions: [],
  pagination: {
    page: 1,
    hasNext: true
  },
};

export default createReducer(initialState, {
  [QUESTIONS_FETCH_REQUESTED] (state: QuestionsState): QuestionsState {
    return {
      ...state,
      isLoading: true,
    };
  },
  [QUESTIONS_FETCH_SUCCESS] (state: QuestionsState, action: Action<QuestionSuccessPayload>): QuestionsState {
    const { pagination, questions } = action.payload;
    return {
      ...state,
      isLoading: false,
      questions: pagination.page > 1 ? [...state.questions, ...questions] : questions,
      pagination,
    };
  },
});
