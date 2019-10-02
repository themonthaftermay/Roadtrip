import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import * as ACTIONS from '../reducers/reducerActions';

function mapStateToProps(state) {   
    return ({LoginPage: state.VisibleState.LoginPage});
}

function mapDispatchToProps(dispatch) {
    return ({makeVis: () => dispatch({type: "ting", personId: id})});
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
