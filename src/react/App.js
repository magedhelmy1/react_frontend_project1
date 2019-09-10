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
import PrivateRoute from "./components/PrivateRoute"
import {loadUser} from "../store/actions/actions";


class App extends Component {

    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        return (

            <div>

                <Router>
                    <NavBar {...this.props}/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Log_in_Page}/>
                            <PrivateRoute exact path="/Main_Page" component={Main_Page}/>
                            <PrivateRoute exact path="/Researcher_Page" component={ResearcherPage}/>
                            <PrivateRoute exact path="/Annotation/:video_id" component={AnnotationPage}/>
                            <PrivateRoute exact path="/Analyst_Page" component={AnalystPage}/>
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


// Mapping a method to the state by dispatching an action.


// By using connect, we connect our React App to the State
const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(loadUser())
    }
};

export default connect(null, mapDispatchToProps)(App);
