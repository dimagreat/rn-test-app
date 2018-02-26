// @flow
import { connect } from 'react-redux';

import { QuestionsList } from './QuestionsList';
import { requestQuestions } from '../actions';

function mapStateToProps(state: AppState) {
  return {
    pagination: state.questions.pagination,
    isLoading: state.questions.isLoading,
    questions: state.questions.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestions: (page: number) => dispatch(requestQuestions(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
