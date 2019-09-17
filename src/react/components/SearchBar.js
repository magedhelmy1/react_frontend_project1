import React from 'react';
import {
    Form, Col, Button, Jumbotron, Container,
    ButtonToolbar, ButtonGroup
} from 'react-bootstrap'
import * as actions from "../../store/actions/researcher";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";


class SearchBar extends React.Component {


    handleFormSubmit = e => {
        e.preventDefault();
        const mlabName = e.target.elements.mlabName.value;
        const mlabCity = e.target.elements.mlabCity.value;
        const mlabDept = e.target.elements.mlabDept.value;
        const mlabClincCondi = e.target.elements.mlabClincCondi.value;

        this.props.change_button_text();
        this.props.search(mlabName, mlabCity, mlabDept, mlabClincCondi);
    };


    render() {

        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Row>

                                <Form.Group as={Col} controlId="mLab-Name">
                                    <Form.Label column="">mLab name:</Form.Label>
                                    <Form.Control name='mlabName' type="text" placeholder="mLab Name"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="mLab-City">
                                    <Form.Label>mLab city location:</Form.Label>
                                    <Form.Control name='mlabCity' type="text" placeholder="mLab City"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="mLab-Department">
                                    <Form.Label>mLab Department:</Form.Label>
                                    <Form.Control name='mlabDept' type="text" placeholder="mLab Departement"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="mLab-Clinical-Condition">
                                    <Form.Label>Clinical Condition:</Form.Label>
                                    <Form.Control name='mlabClincCondi' type="text" placeholder="Clinical Condition"/>
                                </Form.Group>

                            </Form.Row>

                            <ButtonToolbar
                                className="justify-content-between"
                                aria-label="Toolbar with Button groups">

                                <ButtonGroup>
                                    <Button variant="primary" type="submit">
                                        {this.props.label}
                                    </Button>
                                </ButtonGroup>


                                <ButtonGroup>

                                    <Link
                                        to="/Upload_Page">
                                        <Button variant="info">
                                            Upload
                                        </Button>
                                    </Link>

                                </ButtonGroup>
                            </ButtonToolbar>

                        </Form>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        label: state.researcher.label,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        search: (mlabName, mlabCity, mlabDept, mlabClincCondi) =>
            dispatch(actions.searchResults(mlabName, mlabCity, mlabDept, mlabClincCondi)),
        change_button_text: () => dispatch(actions.changeSearchButton())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));



