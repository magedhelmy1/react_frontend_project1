// An action type is a string that simply describes the type of an action. They're commonly stored as constants or collected in enumerations to help reduce typos and because programmers love organization. I've found it helpful to structure my action types like this:


export const GET_ERRORS = "GET_ERRORS";
export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";

export const AUTH_ERROR = "AUTH_ERROR";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const OTP_SUCCESS = "OTP_SUCCESS";
export const OTP_FAIL = "OTP_FAIL";

export const BUTTON_LABEL = 'BUTTON_LABEL';
export const PRESENT_RESULTS = 'PRESENT_RESULTS';
export const DETAIL_VIEW = 'DETAIL_VIEW';
