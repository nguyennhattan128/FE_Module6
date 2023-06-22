import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../service/users/userService";
import {TextField} from "./TextField";

export default function Login(){
    const validate = Yup.object({
        username: Yup.string()
            .required("Please enter username!"),
        password: Yup.string()
            .required("Please enter password!")
    })

    const navigate = useNavigate();
    const submit = (user) => {
        login({
            username: user.username.trim(),
            password: user.password.trim()
        }).then((data) => {
            console.log(data)
            if( typeof data === "string") {
                document.getElementById("state").textContent = data
            }
            if (data.token) {
                localStorage.setItem("user", JSON.stringify(data))
                navigate('/')
            }
            else {
                document.getElementById('Notice').innerHTML = data
            }
        }).catch((err) => {
            console.log(err.message)

        })
    }









    return(
        <>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={validate}
                onSubmit={values => {
                    submit(values)
                }
                }
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
                                                    <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                                                        Zay
                                                    </a>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                                                <div className="form-outline mb-1">
                                                    <TextField label="First Name" name="username" type="text" className="form-control form-control-lg" placeholder={"User name"} />
                                                </div>
                                                <div className="form-outline mb-1">
                                                    <TextField label="password" name="password" type="password" className="form-control form-control-lg" placeholder={"Password"} />
                                                    <label className="form-label" htmlFor="form2Example27"></label>
                                                </div>
                                                <div id="state" style={{color: "red", paddingBottom: "20px"}}></div>
                                                <div className="pt-1 mb-4">
                                                    <button  type="submit" className="btn btn-success" >Login</button>
                                                </div>
                                                <Link to="/forgot-password" className="small text-muted">Forgot password?</Link>
                                                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link style={{color: '#393f81'}} to={'/register'}>Register here</Link></p>

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