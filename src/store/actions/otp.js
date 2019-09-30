import {OTP_SUCCESS, AUTH_ERROR} from "./actionTypes";
import axios from "axios";
import {returnErrors} from "./messages";
import {tokenConfig} from "./auth";
import history from "../../react/components/history";

export const otp_action = (token_input) => (dispatch, getState) => {

    axios.post("http://127.0.0.1:8000/api/totp/verify/",
        {token: token_input.token}, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: OTP_SUCCESS,
            });

            if (res.data.success) {
                history.push('/Main_Page')
            }
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};