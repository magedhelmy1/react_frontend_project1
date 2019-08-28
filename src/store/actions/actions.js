import axios from 'axios';
import * as actionTypes from './actionTypes';

// an action creator is a function that creates and returns an action.
// Actions describe the fact that something happened, but don’t specify how the application’s state changes in response.
// The actions are executed by the dispatch, and return an object that contains a type
// Because the action has been dispatched, it goes to the store and recieved by the reducer.
// the reducer will take a look at the action, and then executes the method.

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) //after 1 hour dispatch logout methods
    }
};

export const authLogin = (username, password) => { //take in username and password
    return dispatch => {
        dispatch(authStart()); //dispatch that the login process has started - an alert
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username, //post the username and password to the django backend
            password: password
        })
            .then(res => { //get the promise back
                const token = res.data.key; //it generates a key, that you save
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000); //grab the date
                localStorage.setItem('token', token); //save the items in the browser storage using the API
                localStorage.setItem('expirationDate', expirationDate); //save the items in the browser storage using the API
                dispatch(authSuccess(token)); //dispatch that a token has been recieved - an alert
                dispatch(checkAuthTimeout(3600)); //dispatch the time the user should be logged in for.

            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

// If there is no token, then simply log out.
// Otherwise the new date will be the current time stored in the local storage.
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout()); //If expiraiton date has hapepend then dispatch logout.
            } else {
                dispatch(authSuccess(token)); //otherwise dispatch auth success with the token
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
};


export const Search_Results = (mlabName, mlabCity, mlabDept, mlabClincCondi) => {
    return dispatch => {
        axios.get("http://127.0.0.1:8000/api/")
            .then(res => {
                const mLab = res.data;
                dispatch(presentResult(mLab))
            });
    }
};


export const presentResult = results => {
    return {
        type: actionTypes.PRESENT_RESULTS,
        results: results
    }
};