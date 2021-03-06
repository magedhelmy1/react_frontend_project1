import React, {Component} from 'react';
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";
import {connect} from "react-redux";
import {withRouter} from "react-router";


class MLabDatabaseListView extends Component {


    render() {
        return (
            <div>
                <CustomPaginationActionsTable rows={this.props.mlabData}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        mlabData: state.researcher.results,
    }
};


export default connect(mapStateToProps, null)(withRouter(MLabDatabaseListView));




