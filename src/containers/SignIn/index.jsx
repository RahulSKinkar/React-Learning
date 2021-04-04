import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        
    email: Yup.string()
        .email('Invalid email')
        .required(' Email is Required'),
});

const SignIn = () => {
    return (
        <div className="signin-component">
            <Formik
                initialValues={{ email: "abc@gmail.com", password: "" }}
                onSubmit={({ setSubmitting, values }) => {
                    console.log(values)
                    alert("Form is validated! Submitting the form...");
                    setSubmitting(false);
                }}
                validationSchema={SigninSchema}
                // validate={values => {
                //     const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
                //     let errors = {};
                //     if (values.email === "") {
                //       errors.email = "Email is required";
                //     } else if (!emailTest.test(values.email)) {
                //       errors.email = "Invalid email address format";
                //     }
                //     if (values.password === "") {
                //       errors.password = "Password is required";
                //     } else if (values.password.length < 3) {
                //       errors.password = "Password must be 3 characters at minimum";
                //     }
                //     return errors;
                //   }}
            >
                {({ errors, touched, handleChange, values, initialValues, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="form-control"
                            />
                            <ErrorMessage component="div" className='error-field' name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                            />
                            <ErrorMessage component="div" className='error-field' name="password" />
                        </div>

                        { !isSubmitting && <button type="submit">Submit</button>}
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default SignIn;
