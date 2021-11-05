import { fetchUserData, logoutUser } from '../../../services/AuthService';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_PENDING = 'FETCH_USER_DATA_PENDING';
export const FETCH_USER_DATA_FULFILLED = 'FETCH_USER_DATA_FULFILLED';
export const FETCH_USER_DATA_REJECTED = 'FETCH_USER_DATA_REJECTED';
export const SET_USER_DATA = 'SET_USER_DATA';
export const LOGOUT_USER = 'LOGOUT_USER';

const fetchUserDataAction = () => {
    return async function (dispatch) {
        fetchUserData().then(r => {
            sessionStorage.setItem('userData', JSON.stringify(r.data.data));
            dispatch(setUserData(r.data.data));
        });
    };
};
export { fetchUserDataAction as fetchUserData };

export const setUserData = (userData) => {
    sessionStorage.setItem('userData', JSON.stringify(userData));
    return {
        type: SET_USER_DATA,
        payload: userData
    };
};

const logoutUserAction = () => {
    return async function (dispatch) {
        return new Promise((r) => {
            sessionStorage.removeItem('userData');
            dispatch({
                type: LOGOUT_USER,
            });
            r();
        });
    };
};
export { logoutUserAction as logoutUser };