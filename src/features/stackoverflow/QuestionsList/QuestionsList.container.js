// @flow
import { connect } from 'react-redux';

import { QuestionsList } from './QuestionsList';
import { requestQuestions } from '../actions';

function mapStateToProps(state: AppState) {
  return {
    page: state.questions.page,
    isLoading: state.questions.isLoading,
    questions: state.questions.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestions: (page) => dispatch(requestQuestions(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
