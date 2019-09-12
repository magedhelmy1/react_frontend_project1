import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import combineReducer from './store/reducers/reducers';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducer,
    composeEnhances(applyMiddleware(thunk)
    ));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

