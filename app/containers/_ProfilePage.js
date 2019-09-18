import {connect} from 'react-redux';
import ProfilePage from '../components/ProfilePage/ProfilePage';

function mapStateToProps(state) {   
    return ({ProfilePage: state.VisibleState.ProfilePage});
}

function mapDispatchToProps(dispatch) {
    return ({makeVis: () => dispatch({type: "ting", personId: id})});
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
