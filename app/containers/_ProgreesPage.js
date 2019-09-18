import {connect} from 'react-redux';
import ProgressPage from '../components/ProgressPage/ProgressPage';

function mapStateToProps(state) {   
    return ({ProgressPage: state.VisibleState.ProgressPage});
}

function mapDispatchToProps(dispatch) {
    return ({makeVis: () => dispatch({type: "ting", personId: id})});
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
