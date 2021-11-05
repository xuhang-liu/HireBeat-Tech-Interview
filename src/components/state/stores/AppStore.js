import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { AppReducer } from '../reducers/AppReducer';
import { AuthReducer } from '../reducers/AuthReducer';

const reducers = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
});

export const createAppStore = () => {
    return createStore(reducers, applyMiddleware(thunk, promiseMiddleware()));
};