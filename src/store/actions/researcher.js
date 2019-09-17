import axios from 'axios';
import * as actionTypes from './actionTypes';
import {tokenConfig} from "./auth";


export const searchResults = (mlabName, mlabCity, mlabDept, mlabClincCondi) =>
    (dispatch, getState) => {
        axios.get(`http://127.0.0.1:8000/api/?mLab_name=${mlabName}&mLab_city_location=${mlabCity}&mLab_department=${mlabDept}&clinical_condition=${mlabClincCondi}`, tokenConfig(getState))
            .then(res => {
                const mLab = res.data;
                dispatch(presentResult(mLab))
            });

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

export const get_detailed_view = (mLab_id) => (dispatch, getState) => {
        axios.get(`http://127.0.0.1:8000/api/${mLab_id}`, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: actionTypes.DETAIL_VIEW,
                    payload: res.data
                });
            });

};

