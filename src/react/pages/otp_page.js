import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik} from "formik";

class otp_page extends Component {

    render() {
        return (
            <div>
                <Formik
                    initialValues={{token: ''}}
                    validate={values => {
                        let errors = {};
                        if (!values.token) {
                            errors.token = 'Required';
                        }
                        return errors;
                    }}

                    onSubmit={(values, {setSubmitting}) => {

                        // this.props.otp(values)
                        setSubmitting(false);

                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,


                      }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="token"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.token}
                            />

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(null,
    mapDispatchToProps
)(otp_page);
