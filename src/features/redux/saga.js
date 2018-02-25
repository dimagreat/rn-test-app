import { getQuestionsSaga } from '../stackoverflow';

export default function* rootSaga() {
  yield [
    getQuestionsSaga(),
  ]
}
