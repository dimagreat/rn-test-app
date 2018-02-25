import { call, put, take } from 'redux-saga/effects';

import { questionsFetchSuccess } from './actions';
import { fetchQuestions } from './api';
import { QUESTIONS_FETCH_REQUESTED } from './actionKeys'

export default function* () {
  try {
    yield take(QUESTIONS_FETCH_REQUESTED);
    const questions = yield call(fetchQuestions);
    yield put(questionsFetchSuccess(1, questions));
  } catch(error) {
    console.error(error);
  }
}
