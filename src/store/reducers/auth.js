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
const authStart = (state, action) => { //Update the current state with the passed action from the action creators or from the form written
    return updateObject(state, {
        error: null,
        isLoading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,

    });
};

const authFail = (state, action) => {
    localStorage.removeItem("token");
    return updateObject(state, {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { //update the current state with a key token to null
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
    });
};


export default function (state = initialState, action) {
    switch (action.type) { //we want to return one this methods when we receive a certain action type
        //If the action type received equals any of the following
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);

        default:
            return state;
    }
};

