import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from "../../store/actions/actions";

class AnnotationPage extends Component {


    componentDidMount() {
        this.props.mlab_detail(this.props.match.params.video_id)
    }

    render() {
        return (
            <div>

                <p> The name is : {this.props.mlab_view.mLab_name}</p>

            </div>
        );
    }
}


const mapStateToProps = state => {

    return {

        mlab_view: state.detail

    };

};

const mapDispatchToProps = dispatch => {

    return {
        mlab_detail: (mlab_id) => dispatch(actions.get_detailed_view(mlab_id))
    }
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(AnnotationPage);
