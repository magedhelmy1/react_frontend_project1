// An action type is a string that simply describes the type of an action. They're commonly stored as constants or collected in enumerations to help reduce typos and because programmers love organization. I've found it helpful to structure my action types like this:


export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const BUTTON_LABEL = 'BUTTON_LABEL';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const PRESENT_RESULTS = 'PRESENT_RESULTS';

export const DETAIL_VIEW = 'DETAIL_VIEW';