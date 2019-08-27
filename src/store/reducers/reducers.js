import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './utility';

//  reducer should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

const initialState = {
    token: null,
    error: null,
    loading: false,
    search: null,
    fetch: null,
    results: []
};

// The job of the reducer is take in the initial state
// and manipulates it by updating the specific keys specified
// When we say authStart, we update the state with -> error is null and the loading is true
const authStart = (state, action) => { //Update the current state with the passed action from the action creators or from the form written
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token, //To access the parameter in the token variable
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { //update the current state with a key token to null
        token: null
    });
};


const presentResult = (state, action) => {
    return updateObject(state, {
        results: action.results
    });
};

const reducer = (state = initialState, action) => {
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

        case actionTypes.PRESENT_RESULTS:
            return presentResult(state, action);


        default:
            return state;
    }
};

export default reducer;