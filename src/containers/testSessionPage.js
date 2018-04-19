import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuizObject } from '../action/courseSession'
import TestSessionPage from '../pages/testSession';

const mapStateToProps = (state) => {
    return ({
        selectedQuiz: state.courseSession.selectedQuiz
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        "getQuizObject": getQuizObject
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSessionPage);