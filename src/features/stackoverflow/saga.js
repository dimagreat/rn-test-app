import { call, put, takeLatest } from 'redux-saga/effects';

import { questionsFetchSuccess } from './actions';
import { fetchQuestions } from './api';
import { QUESTIONS_FETCH_REQUESTED } from './actionKeys'

function* getData(action) {
  try {
    const questionsData = yield call(() => fetchQuestions(action.payload));
    yield put(questionsFetchSuccess(questionsData));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(QUESTIONS_FETCH_REQUESTED, getData);
}
