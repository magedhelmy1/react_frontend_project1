import {OTP_SUCCESS, AUTH_ERROR} from "./actionTypes";
import axios from "axios";
import {returnErrors} from "./messages";
import {tokenConfig} from "./auth";

export const otp_action = (token_input) => (dispatch, getState) => {

    axios
        .post("http://127.0.0.1:8000/api/totp/verify", {
            token: token_input
        },tokenConfig(getState))
        .then(res => {
            dispatch({
                type: OTP_SUCCESS,
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};