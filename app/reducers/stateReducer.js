import {combineReducers} from 'redux';
import * as ACTIONS from './reducerActions';

const DefaultVisibleState = {
    StartPage: true,
    ProfilePage: false,
    TripPage: false,
    ProgressPage: false
}

const VisibleState = (state = DefaultVisibleState, action) => {
    switch (action.type) {
        case ACTIONS.START_TRIP:
            return {
                StartPage: false,
                ProfilePage: false,
                TripPage: true,
                ProgressPage: false
            }
        default:
            return state;
    }
}

const DefaultPauseOrPlayState = {
    Pause: true
}

const PauseOrPlayState = (state = DefaultPauseOrPlayState, action) => {
    return state;
}

export default combineReducers({
    VisibleState,
    PauseOrPlayState
});