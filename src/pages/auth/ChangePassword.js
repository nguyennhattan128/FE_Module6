import React, {useState, useContext} from "react";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useLocation, useNavigate} from "react-router-dom";
import * as Yup from "yup";


const validate = Yup.object({
    password: Yup.string()
        .min(6, "Password must be minimum 6 digits!")
        .required("Password Required!"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Password must match!")
        .required("Confirm password is required!"),

})

export default function Reset() {
    const location = useLocation()
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const { otp, email } = location.state;

    function changePassword(values) {
        if (values.password) {
            try {
                axios.put("http://localhost:3001/update-password", {
                    email:email,
                    newPassword: password,
                }).then(() => navigate('/login'));
                return alert("Password changed successfully, please login!");
            } catch (error) {console.log(error);}}
        return alert("Please enter your new Password");
    }

    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    resetPassword: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    changePassword(values)
                }}
            >
                {formik => (
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
                                        >Enter your email address</h3><br/>
                                        <a href="#" id="flipToLogin" className="flipLink">
                                            <div id="triangle-topleft"></div>
                                        </a>
                                        <Field type="password" className="form-control" name="password"  autoFocus/><br/>
                                        <p style={{color: "red"}}><ErrorMessage name="password"/></p>
                                        <Field type="password" className="form-control" name="confirmPassword"   autoFocus/>
                                        <p style={{color: "red"}}><ErrorMessage name="confirmPassword"/></p><br/>
                                        <button className="btn btn-lg btn-primary btn-block" type="submit"  style={{marginLeft: 50}}>Reset Password</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>

    );
}