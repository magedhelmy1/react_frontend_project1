import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/researcher";

class AnnotationPage extends Component {


    componentDidMount() {
        this.props.get_detailed_view(this.props.match.params.video_id)
    }

    render() {
        return (
            <div>

                <p> The name is : {this.props.detail.mLab_name}</p>

            </div>
        );
    }
}


const mapStateToProps = state => {

    return {

        detail: state.researcher.detail

    };

};

const mapDispatchToProps = dispatch => {

    return {
        get_detailed_view: (mlab_id) => dispatch(actions.get_detailed_view(mlab_id))
    }
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(AnnotationPage);
