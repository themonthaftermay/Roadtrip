import {connect} from 'react-redux';
import TripPage from '../components/TripPage/TripPage';
import * as ACTIONS from '../reducers/reducerActions';

function mapStateToProps(state) {   
    return ({TripPage: state.VisibleState.TripPage,
            PauseOrPlayState: state.PauseOrPlayState.Pause});
}

function mapDispatchToProps(dispatch) {
    return ({PauseResume: () => dispatch({type: ACTIONS.PAUSE_RESUME_TRIP}),
            StopTrip: () => dispatch({type: ACTIONS.STOP_TRIP})});
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPage);
