import {
    PRESENT_RESULTS,
    BUTTON_LABEL,
    DETAIL_VIEW,

} from "../actions/actionTypes";

const initialState = {
    results: [],
    label: 'Show All',
    detail: "Loading",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRESENT_RESULTS:
            return {
                ...state,
                results: action.results
            };
        case BUTTON_LABEL:
            return {
                ...state,
                label: 'Search'
            };
        case DETAIL_VIEW:
            return {
                ...state,
                detail: action.payload
            };

        default:
            return state;
    }
}