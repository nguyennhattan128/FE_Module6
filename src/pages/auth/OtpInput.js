import React, {useState} from "react";

import {ErrorMessage, Field, Form, Formik} from "formik";
import {useLocation, useNavigate} from "react-router-dom";
import * as Yup from "yup";


const validate = Yup.object({
    inputOtp: Yup.number()
        .required('OTP is required'),
})

export default function OtpInput() {
    const location = useLocation();
    const navigate = useNavigate();
    const { otp, email } = location.state;


    function verifyOTP(values) {
        if (parseInt(values.inputOtp) === otp) {
            navigate('/reset', {state: {otp, email}})
        } else {
            alert("The code you have entered is not correct, try again re-send the link");
        }
    }
    return (
        <>
            <Formik
                initialValues={{
                    inputOtp : '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    verifyOTP(values)
                }}
            >

                    <Form>
                        <div className="container" style={{
                            marginTop: 70,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div className="row">
                                <div className="container" id="formContainer" style={{
                                }}>
                                    <div className="form-signin" id="recover" role="form">
                                        <h3 className="form-signin-heading"
                                            style={{marginLeft: 10}}
                                        >Email Verification</h3><br/>
                                        <h3 className="form-signin-heading"
                                            style={{marginLeft: 10}}
                                        >We have sent a verification code to your email</h3><br/>
                                        <Field type="number" className="form-control" name="inputOtp" autoFocus/><br/>
                                        <p style={{color: "red"}}><ErrorMessage name="inputOtp"/></p>
                                        <button className="btn btn-lg btn-primary btn-block" type="submit"  style={{marginLeft: 50}}>Verify Account</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
            </Formik>
        </>
    );}