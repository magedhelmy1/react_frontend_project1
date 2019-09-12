import axios from 'axios';
import * as actionTypes from './actionTypes';

// an action creator is a function that creates and returns an action.
// Actions describe the fact that something happened, but don’t specify how the application’s state changes in response.
// The actions are executed by the dispatch, and return an object that contains a type
// Because the action has been dispatched, it goes to the store and received by the reducer.
// the reducer will take a look at the action, and then executes the method.

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
};

export const loginSuccess = token => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    }
};

export const authError = error => {
    return {
        type: actionTypes.AUTH_ERROR,
        error: error
    }
};

export const loginFail = error => {
    return {
        type: actionTypes.LOGIN_FAIL,
    }
};

export const login = (username, password) => dispatch => {
    dispatch(loginStart());
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body
    const body = JSON.stringify({username, password});

    axios
        .post('http://127.0.0.1:8000/api/auth/login', body, config)
        .then(res => {
            dispatch(loginSuccess(res.data));
        })
        .catch(err => {
            dispatch(loginFail());
            dispatch(authError(err))
        });
};


// LOGOUT USER

export const logout = () => (dispatch, getState) => {
    axios
        .post('http://127.0.0.1:8000/api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch(logoutSuccess());
        })
        .catch(err => {
            dispatch(authError(err))
        });
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
};


export const userLoading = () => {
    return {
        type: actionTypes.USER_LOADING,
    }
};

export const userLoaded = (data) => {
    return {
        type: actionTypes.USER_LOADED,
        payload: data

    }
};
// CHECK if token exists and load user info
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch(userLoading());

    axios
        .get('http://127.0.0.1:8000/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch(userLoaded(res.data));
        })
        .catch(err => {
            dispatch(authError(err))
        });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};
