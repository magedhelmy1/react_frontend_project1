import React from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import "../App.css"
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions' //import all actions as action and access them using the dot function
import {withRouter} from "react-router";


class LoginForm extends React.Component {

    //Catch errors and display them correctly
    handleFormSubmit = e => {
        e.preventDefault();
        const user = e.target.elements.user.value;
        const password = e.target.elements.password.value;

        this.props.onAuth(user, password);


    };


    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div>
                <Container className="login">

                    <Form onSubmit={this.handleFormSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label column="">Username</Form.Label>
                            <Form.Control name='user' type="text" placeholder="Enter username"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="">Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password"/>
                        </Form.Group>

                        {errorMessage}

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                    </Form>

                </Container>
            </div>

        );
    }
}

const mapStateToProps = (state) => {

        return {
            error: state.error,
            successLogin: state.token !== null
        }
    };

const mapDispatchToProps = dispatch => {
        return {
            onAuth: (username, password) => dispatch(actions.authLogin(username, password))
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));

