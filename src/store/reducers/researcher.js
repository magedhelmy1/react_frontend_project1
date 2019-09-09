import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './utility';

const initialState = {
    results: [],
    label: 'Show All',
    detail: 'Loading',

};

const presentResult = (state, action) => {
    return updateObject(state, {
        results: action.results
    });
};

const changeSearchButton = (state, action) => {
    return updateObject(state, {
        label: 'Search'
    });
};

const view_mlab_view = (state, action) => {
    return updateObject(state, {
        detail: action.mlab_video
    });
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.PRESENT_RESULTS:
            return presentResult(state, action);
        case actionTypes.BUTTON_LABEL:
            return changeSearchButton(state, action);
        case actionTypes.DETAIL_VIEW:
            return view_mlab_view(state, action);

        default:
            return state;

    }
}