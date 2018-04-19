import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let Middlewares = applyMiddleware(thunk, logger());
let store = createStore(reducers, Middlewares);
    ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>,
    document.getElementById('root')
);