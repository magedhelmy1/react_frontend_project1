import axios from 'axios';
import * as actionTypes from './actionTypes';


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
