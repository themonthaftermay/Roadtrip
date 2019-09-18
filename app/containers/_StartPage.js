import {connect} from 'react-redux';
import StartPage from '../components/StartPage/StartPage';
import * as ACTIONS from '../reducers/reducerActions';

function mapStateToProps(state) {   
    return ({StartPage: state.VisibleState.StartPage});
}

function mapDispatchToProps(dispatch) {
    return ({StartTrip: () => dispatch({type: ACTIONS.START_TRIP})});
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
