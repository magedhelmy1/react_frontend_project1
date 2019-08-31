import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions';

class NavBar extends React.Component {

    render() {

        return (
            <div>

                {
                    this.props.isAuthenticated ?
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <Link
                                        to="/Main_page"
                                        style={{textDecoration: 'none'}}
                                        className="navbar-brand">
                                        Home
                                    </Link>
                                </div>


                                <Link
                                    to="/Researcher_Page"
                                    style={{textDecoration: 'none'}}>
                                    Researcher Page
                                </Link>

                                <Link
                                    to="/Analyst_Page"
                                    style={{textDecoration: 'none'}}>
                                    Analyst Page
                                </Link>


                                <Link
                                    to="/"
                                    onClick={this.props.logout}
                                    style={{textDecoration: 'none'}}>
                                    Log Out
                                </Link>
                            </div>
                        </nav>

                        :

                        console.log("Please Log In To View NavBar")

                }


            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));