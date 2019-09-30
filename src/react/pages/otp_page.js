import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/otp";
import {Form, Button, Container} from 'react-bootstrap'

class otp_page extends Component {

    handleFormSubmit = e => {
        e.preventDefault();
        const token = e.target.elements.OTPCode.value
        this.props.otp(token)

    };


    render() {
        return (
            <div>
                <Container className="login">
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="OTPCode">
                            <Form.Label column={1}> OTP Code</Form.Label>
                            <Form.Control/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        otp: (values) => dispatch(actions.otp_action(values))
    };
};
export default connect(null,
    mapDispatchToProps
)(otp_page);
