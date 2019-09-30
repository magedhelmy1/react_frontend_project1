import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuth_isOTP} from "../../store/reducers/auth";

const PrivateRoute = ({component: Component, isAuthenticated,isLoading, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            if (isLoading) {
                return <h2>Loading...</h2>;
            } else if (!isAuthenticated) {
                return <Redirect to="/"/>;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = state => ({
    isAuthenticated: isAuth_isOTP(state),
    isLoading: state.auth.isLoading

});

export default connect(mapStateToProps)(PrivateRoute);