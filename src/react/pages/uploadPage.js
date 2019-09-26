import React, {Component} from 'react';
import {
    Form, Col, Button, Jumbotron, Container
} from 'react-bootstrap'

class UploadPage extends Component {

    handleFormSubmit = e => {
        e.preventDefault();
        // const mlabName = e.target.elements.mlabName.value;
        // const mlabCity = e.target.elements.mlabCity.value;
        // const mlabDept = e.target.elements.mlabDept.value;
        // const mlabClincCondi = e.target.elements.mlabClincCondi.value;
        //
        // this.props.change_button_text();
        // this.props.search(mlabName, mlabCity, mlabDept, mlabClincCondi);
        console.log(e.target.elements.mLab_name.value)

    };

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>

                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group as={Col} controlId="formGridState0">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="mLab_name">
                                <Form.Label>mLab Name</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control name='mLab_name'/>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress3">
                                <Form.Label>Department</Form.Label>
                                <Form.Control name='mLab_name'/>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress4">
                                <Form.Label>Session Number</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress5">
                                    <Form.Label>Video 1</Form.Label>
                                    <br/>
                                    <input
                                        type="file"
                                        name="file1"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress6">
                                    <Form.Label>Video 2</Form.Label>
                                    <br/>
                                    <input
                                        type="file"
                                        name="file2"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress7">
                                    <Form.Label>Video 3</Form.Label>
                                    <br/>
                                    <input type="file"
                                           name="file3"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress8">
                                    <Form.Label>Video 4</Form.Label>
                                    <br/>
                                    <input type="file"
                                           name="file4"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress9">
                                    <Form.Label>Video 5</Form.Label>
                                    <br/>
                                    <input type="file"
                                           name="file5"/>
                                </Form.Group>
                            </Form.Row>
                            <br/>
                            <Button
                                variant="primary"
                                type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default UploadPage;