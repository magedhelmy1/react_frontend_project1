import React, {Component} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import AnalystPage from "./pages/AnalystPage";
import ResearcherPage from "./pages/ResearcherPage";
import Main_Page from "./pages/Main_Page";
import GenericNotFound from "./pages/GenericNotFound";
import NavBar from "./pages/NavBar";
import Log_in_Page from "./pages/Log_in_Page"
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
import 'antd/dist/antd.css'
import AnnotationPage from "./pages/AnnotationPage";

const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={(props) => (

        rest.auth
            ?
            <Component {...props}/>
            :
            <Redirect to='/'/>

    )}/>
);


class App extends Component {

    // Everytime this class is mounted, the componentDidMount() gets called, which dispatches the action mentioned.
    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        return (

            <div>

                <Router>
                    <NavBar {...this.props}/>
                    <div>
                        <Switch>
                            <Route exact path="/"
                                   render={() => (
                                       this.props.isAuthenticated ? (
                                           <Redirect to="/Main_Page"/>) : (
                                           <Log_in_Page/>

                                       )
                                   )}/>

                            <PrivateRoute path="/Main_Page" exact component={Main_Page} auth={this.props.isAuthenticated}/>
                            <PrivateRoute path="/Researcher_Page" exact component={ResearcherPage} auth={this.props.isAuthenticated}/>
                            <PrivateRoute path="/Annotation/:video_id" exact component={AnnotationPage} auth={this.props.isAuthenticated}/>
                            <PrivateRoute path="/Analyst_Page" exact component={AnalystPage} auth={this.props.isAuthenticated}/>
                            <Route path='*' component={GenericNotFound}/>

                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

// Convert the state in the store of redux to properties we can use in the react application.
// We take state in as a parameter, and we return an object.
// The object is what we want map in the property.That will allow us to gain access to a property that are in the store.
//

const mapStateToProps = state => {

    return {

        isAuthenticated: state.token !== null

    };

};

// Mapping a method to the state by dispatching an action.
const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};


// By using connect, we connect our React App to the State
export default connect(
    mapStateToProps, mapDispatchToProps
)(App);
