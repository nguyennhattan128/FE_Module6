import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './Register.css';
import {useNavigate} from "react-router-dom";
import {register} from "../../service/users/userService";
import {useDispatch} from "react-redux";
export const Register = () => {
    const validate = Yup.object({
        username: Yup.string()
            .min(3, 'Tên người dùng từ ba ký tự trở lên')
            .max(15, 'Tên người dùng cần nhỏ hơn 15 ký tự')
            .required('Hãy nhập tên người dùng'),
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Hãy nhập email'),
        password: Yup.string()
            .min(6, 'Mật khẩu từ 6 ký tự trở lên')
            .required('Hãy nhập mật khẩu'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu phải trùng khớp')
            .required('Hãy xác nhận mật khẩu'),
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submit = (user) => {
         dispatch(register({
            username: user.username.trim(),
            email: user.email.trim(),
            password: user.password.trim()
        })).then(()=>{
             navigate('/login');
         })
    }

    return (
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
                                        <h3 className="auth-form_heading">Đăng ký</h3>
                                        <span className="auth-form_switch-btn">Đăng nhập</span>
                                    </div>
                                    <div className="auth-form_form">
                                        <div className="auth-form_group">
                                            <Field label="First Name" name="username" type="text" className="auth-form_input" placeholder={"Tên đăng nhập"} />
                                            <Field label="Email" name="email" type="email" className="auth-form_input" placeholder={"Nhập email"} />
                                            <Field label="password" name="password" type="password" className="auth-form_input" placeholder={"Mật khẩu "} />
                                            <Field label="Confirm Password" name="confirmPassword" type="password" className="auth-form_input" placeholder={"Nhập lại mật khẩu"} />
                                        </div>
                                    </div>
                                    <div className="auth-form_aside">
                                        <p className="auth-form_policy-text">
                                            Bằng việc đăng kí, bạn đã đồng ý với big-shop về
                                            <a href="" className="auth-form_text-link"> Điều khoản dịch vụ</a>
                                            <a href="" className="auth-form_text-link"> Chính sách bảo mật</a>
                                        </p>
                                    </div>
                                    <div className="auth-form-control">
                                        <button className="btn auth-form-control-back" type="reset">TRỞ LẠI</button>
                                        <button className="btn btn--primary" type="submit">ĐĂNG KÝ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
        </Formik>
    )
}