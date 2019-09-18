import {connect} from 'react-redux';
import TripPage from '../components/TripPage/TripPage';

function mapStateToProps(state) {   
    return ({TripPage: state.VisibleState.TripPage,
            PauseOrPlayState: state.PauseOrPlayState});
}

function mapDispatchToProps(dispatch) {
    return ({makeVis: () => dispatch({type: "MAKE_TRIP_VIS", personId: id})});
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPage);
