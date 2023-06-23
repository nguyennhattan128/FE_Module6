import React from 'react';
import "./login.css";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import {register} from "../../service/users/userService";

export default function Register(){
    const validate = Yup.object({
        username: Yup.string()
            .min(3, 'Username must be minimum 6 digits!')
            .max(15, 'Username needs to be less than 15 characters')
            .required("Username Required!"),
        email: Yup.string()
            .email("Email is invalid!")
            .required("Email Required!"),
        password: Yup.string()
            .min(6, "Password must be minimum 6 digits!")
            .required("Password Required!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must match!")
            .required("Confirm password is reqired!"),
    })
    const navigate = useNavigate();
    const submit = (user) => {
        register({
            username: user.username.trim(),
            email: user.email.trim(),
            password: user.password.trim()
        }).then(()=>{
            navigate('/login');
        })}
    return(
        <>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    submit(values)
                }}
            >
                {formik => (
                    <Form>
                        <section className="vh ground">
                            <div className="container vh2 py-4">
                                <div className="row d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                                    <div className="col col-xl-10">
                                        <div className="card card-1" >
                                            <div className="row g-0 row-cen">
                                                <div className="col-md-4 col-lg-5 d-none d-md-block">
                                                    <img src="https://images.unsplash.com/photo-1586278500132-7c85dfbc51d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                                                         alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                                                </div>
                                                <div className="col-md-4 col-lg-7 d-flex align-items-center">
                                                    <div className="card-body p-4 p-lg-5 text-black">
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                                                            <a className="navbar-brand text-success logo h1 align-self-center" href="#">
                                                                Zay
                                                            </a>
                                                        </div>
                                                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                                                        <div className="form-outline mb-1">
                                                            <TextField label="First Name" name="username" type="text" className="form-control form-control-lg" placeholder={"Username"} />
                                                        </div>
                                                        <div className="form-outline mb-1">
                                                            <TextField label="Email" name="email" type="email" className="form-control form-control-lg" placeholder={"Email"} />
                                                        </div>
                                                        <div className="form-outline mb-1">
                                                            <TextField label="password" name="password" type="password" className="form-control form-control-lg" placeholder={"Password"} />
                                                        </div>
                                                        <div className="form-outline mb-1">
                                                            <TextField label="Confirm Password" name="confirmPassword" type="password" className="form-control form-control-lg" placeholder={"Repeat Password"} />
                                                            <label className="form-label" htmlFor="form2Example27"></label>
                                                        </div>
                                                        <div className="pt-1 mb-4">
                                                            <button  type="submit" className="btn btn-success" >Register</button>
                                                        </div>
                                                        <a className="small text-muted" href="#!">Forgot password?</a>
                                                        <div className="d-flex justify-content-center">
                                                            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account?</p>
                                                                <Link style={{color: '#393f81'}} to={'/login'}>Login here</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Form>
                )}
            </Formik>
        </>
    )
}