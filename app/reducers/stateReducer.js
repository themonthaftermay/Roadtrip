import {combineReducers} from 'redux';
import * as ACTIONS from './reducerActions';

const DefaultVisibleState = {
    LoginPage: true,
    StartPage: false,
    ProfilePage: false,
    TripPage: false,
    ProgressPage: false,
    SummaryPage: false
}

const VisibleState = (state = DefaultVisibleState, action) => {
    switch (action.type) {
        case ACTIONS.START_TRIP:
            return {
                LoginPage: false,
                StartPage: false,
                ProfilePage: false,
                TripPage: true,
                ProgressPage: false,
                SummaryPage: false
            }
        case ACTIONS.VIEW_PROFILE:
            return {
                LoginPage: false,
                StartPage: false,
                ProfilePage: true,
                TripPage: false,
                ProgressPage: false,
                SummaryPage: false
            }
        case ACTIONS.STOP_TRIP:
            return {
                LoginPage: false,
                StartPage: false,
                ProfilePage: false,
                TripPage: false,
                ProgressPage: false,
                SummaryPage: true
            }
        case ACTIONS.RESTART:
            return {
                LoginPage: false,
                StartPage: true,
                ProfilePage: false,
                TripPage: false,
                ProgressPage: false,
                SummaryPage: false
            }
        case ACTIONS.LOGIN_PAGE:
            return {
                LoginPage: false,
                StartPage: true,
                ProfilePage: false,
                TripPage: false,
                ProgressPage: false,
                SummaryPage: false
            }
        default:
            return state;
    }
}

const DefaultPauseOrPlayState = {
    Pause: true
}

const PauseOrPlayState = (state = DefaultPauseOrPlayState, action) => {
    switch (action.type) {
        case ACTIONS.PAUSE_RESUME_TRIP:
            return {
                Pause: !state.Pause
            }
        default:
                return state;
    }
    

}

export default combineReducers({
    VisibleState,
    PauseOrPlayState
});