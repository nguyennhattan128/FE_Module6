import React from 'react';
import {Formik, Form} from 'formik';
import {TextFieldLogin} from "../../components/auth/TextFieldLogin";
import * as Yup from 'yup';
import './login.css';
import {useNavigate} from "react-router-dom";
import {login} from "../../service/users/userService";
import {TextField} from "./TextField";
import {useDispatch} from "react-redux";

export const Login = () => {
    const validate = Yup.object({
        username: Yup.string()
            .required("Please enter username !"),
        password: Yup.string()
            .required("Please enter password !")
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submit = (user) => {
        dispatch(login({
                username: user.username.trim(),
                password: user.password.trim()
            })
        ).then(() => {
            navigate(('/'))
        })
    }

    return (
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
                    <div>
                        <div className="nav">
                            <ul className="nav-list">
                                <li className="nav-item-left">Big-Shop</li>
                                <li className="nav-item-left">Bạn cần giúp đỡ gì ?</li>

                            </ul>
                            <ul className="nav-list">
                                <li className="nav-item-right">Đăng ký</li>
                                <li className="nav-item-right">Đăng nhập</li>
                            </ul>
                        </div>
                        <div className="parent-container">
                            <div className="auth-form">
                                <div className="auth-form_container">
                                    <div className="auth-form_header">
                                        {/*<h3 className="auth-form_heading">Đăng ký</h3>*/}
                                        <div className="auth-form_switch-btn"
                                             style={{textAlign: "center", animationFillMode: "forwards"}}>Đăng nhập
                                        </div>
                                    </div>
                                    <div id="Notice"></div>
                                    <div className="auth-form_form">
                                        <div className="auth-form_group">
                                            <TextField label="First Name" name="username" type="text"
                                                       className="auth-form_input" placeholder={"Tên đăng nhập"}/>
                                            <TextField label="password" name="password" type="password"
                                                       className="auth-form_input" placeholder={"Mật khẩu "}/>
                                        </div>
                                    </div>
                                    <div className="auth-form_aside">
                                        <p className="auth-form_policy-text">
                                            Nếu bạn quên mật khẩu chọn
                                            <a href="" className="auth-form_text-link"> Quên mật khẩu</a>
                                        </p>
                                    </div>
                                    <div className="auth-form-control">
                                        <button className="btn auth-form-control-back" type="reset">TRỞ LẠI</button>
                                        <button className="btn btn--primary" type="submit">ĐĂNG NHẬP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}