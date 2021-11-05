import {
    FETCH_USER_DATA_FULFILLED,
    FETCH_USER_DATA_REJECTED,
    SET_USER_DATA,
    LOGOUT_USER,
} from '../actions/AuthActions';

const stringifiedUser = sessionStorage.getItem('userData');
let userData = null;
if(typeof stringifiedUser === 'string') {
    try {
        userData = JSON.parse(stringifiedUser);
    }
    catch(e) {
        console.error(e);
    }
}

const initialState = stringifiedUser ? { userData, loggedIn: true } : {
    loggedIn: false
};

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_DATA_FULFILLED:
            return {
                ...state,
                loggedIn: true
            };
        case FETCH_USER_DATA_REJECTED:
            return {
                ...state,
                loggedIn: false
            };
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload,
                loggedIn: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                userData: null,
                loggedIn: false
            };
        default:
            return state;
    }
};