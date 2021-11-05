import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'babel-polyfill';
import './styles/app.scss';

// Polyfills and cross-browser functionalities
require('es6-promise').polyfill();
require('isomorphic-fetch');
require('array.prototype.find').shim();

// Load the React app in the DOM
ReactDOM.render(<App />, document.getElementById('app'));