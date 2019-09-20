import {connect} from 'react-redux';
import SummaryPage from '../components/SummaryPage/SummaryPage';
import * as ACTIONS from '../reducers/reducerActions';

function mapStateToProps(state) {   
    return ({SummaryPage: state.VisibleState.SummaryPage});
}

function mapDispatchToProps(dispatch) {
    return ({Reset: () => dispatch({type: ACTIONS.RESTART})});
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);
