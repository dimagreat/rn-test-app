import {
  QUESTIONS_FETCH_REQUESTED,
  QUESTIONS_FETCH_SUCCESS,
} from './actionKeys';
import { createReducer } from '../utils';
import { QuestionSuccessPayload, QuestionRequestPayload } from './actions';

type QuestionsState = {
  isLoading: boolean;
  questions: string[];
  page: number;
}

const initialState: QuestionsState = {
  isLoading: false,
  page: 1,
  questions: []
};

export default createReducer(initialState, {
  [QUESTIONS_FETCH_REQUESTED] (state: QuestionsState, action: Action<QuestionRequestPayload>): QuestionsState {
    return {
      ...state,
      isLoading: true,
      page: action.payload.page
    };
  },
  [QUESTIONS_FETCH_SUCCESS] (state: QuestionsState, action: Action<QuestionSuccessPayload>): QuestionsState {
    const { page, questions } = action.payload;
    return {
      ...state,
      isLoading: false,
      page,
      questions: page > 1 ? [...state.questions, questions] : questions,
    };
  },
});
