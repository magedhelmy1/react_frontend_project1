import axios from 'axios';
import * as actionTypes from './actionTypes';

// an action creator is a function that creates and returns an action.
// Actions describe the fact that something happened, but don’t specify how the application’s state changes in response.
// The actions are executed by the dispatch, and return an object that contains a type
// Because the action has been dispatched, it goes to the store and received by the reducer.
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


export const authLogin = (username, password) => { //take in username and password
    return dispatch => {
        dispatch(authStart()); //dispatch that the login process has started - an alert
        axios.post('http://127.0.0.1:8000/api/auth/user', {
            username: username, //post the username and password to the django backend
            password: password
        })
            .then(res => { //get the promise back
                const token = res.data.key; //it generates a key, that you save
                dispatch(authSuccess(token)); //dispatch that a token has been received - an alert

            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};


// LOGOUT USER

export const logout = () => (dispatch, getState) => {
    axios
        .post("/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch(logoutSuccess());
        })
        .catch(err => {
            dispatch(authFail(err))
        });
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
};

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
    dispatch(userLoading());
    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch(userLoaded(res.data.key));
        })
        .catch(err => {
            dispatch(authFail(err))
        });
};


/////////////////////////////////////////////////////////////////////////////////////////////
export const Search_Results = (mlabName, mlabCity, mlabDept, mlabClincCondi) => {
    return dispatch => {
        axios.get(`http://127.0.0.1:8000/api/?mLab_name=${mlabName}&mLab_city_location=${mlabCity}&mLab_department=${mlabDept}&clinical_condition=${mlabClincCondi}`)
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

export const changeSearchButton = label => {
    return {
        type: actionTypes.BUTTON_LABEL,
        label: label
    }
};

export const get_detailed_view = mLab_id => {

    return dispatch => {
        axios.get(`http://127.0.0.1:8000/api/${mLab_id}`)
            .then(res => {
                const mlab_detail_view_video = res.data;
                dispatch(detailView(mlab_detail_view_video))
            });
    }
};

export const detailView = mlab_detail => {
    return {
        type: actionTypes.DETAIL_VIEW,
        mlab_video: mlab_detail
    }
};
