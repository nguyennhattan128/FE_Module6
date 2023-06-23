import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";



const validate = Yup.object({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
})



export default function ForgotPassword(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');



    const sendOtp = (values)=> {
        if (values.email) {
            axios.get(`http://localhost:3001/check_email?email=${values.email}`).then((response) => {
                if (response.status === 200) {
                    const OTP = Math.floor(Math.random() * 9000 + 1000);
                    console.log(OTP);
                    setOtp(OTP);
                    setEmail(values.email);
                    axios.post("http://localhost:3001/send_email", {
                        OTP,
                        recipient_email: email
                    })
                        .then(() => navigate('/verify',{state: {otp, email}}))
                        .catch((err)=>{console.log(err)});
                } else {
                    alert("User with this email does not exist!");
                    console.log(response.data.message);
                }}).catch(console.log);
        } else {
                alert("Please enter your email");
        }}

    return(
        <>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    sendOtp(values)
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
                                        <Field type="email" className="form-control" name="email" id="loginEmail" placeholder="Email address" required autoFocus/>
                                        <p style={{color: "red"}}><ErrorMessage name="email"/></p>
                                        <br/>

                                            <button className="btn btn-lg btn-primary btn-block" type="submit"  style={{marginLeft: 50}}>Send OTP via email</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}