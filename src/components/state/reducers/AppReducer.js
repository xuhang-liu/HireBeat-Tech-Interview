// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';

export const AppReducer = combineReducers({
    userData: AuthReducer,
});