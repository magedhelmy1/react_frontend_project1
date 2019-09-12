import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './utility';

//  reducer should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

// The job of the reducer is take in the initial state
// and manipulates it by updating the specific keys specified
// When we say authStart, we update the state with -> error is null and the loading is true
const loginStart = (state, action) => { //Update the current state with the passed action from the action creators or from the form written
    return updateObject(state, {
        error: null,
        isLoading: true
    });
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,

    });
};

const authError = (state, action) => {
    localStorage.removeItem("token");
    return updateObject(state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
};


const logoutSuccess = (state, action) => {
    localStorage.removeItem("token");
    return updateObject(state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
};

const loginFail = (state, action) => {
    localStorage.removeItem("token");
    return updateObject(state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
};

const userLoading = (state, action) => {
    return updateObject(state, {
        isLoading: true
    });
};

const userLoaded = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
    });
};
export default function (state = initialState, action) {
    switch (action.type) { //we want to return one this methods when we receive a certain action type
        //If the action type received equals any of the following
        case actionTypes.USER_LOADING:
            return userLoading(state, action);
        case actionTypes.USER_LOADED:
            return userLoaded(state, action);
        case actionTypes.AUTH_ERROR:
            return authError(state, action);
        case actionTypes.LOGIN_START:
            return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL:
            return loginFail(state, action);
        case actionTypes.LOGOUT_SUCCESS:
            return logoutSuccess(state, action);


        default:
            return state;
    }
};

