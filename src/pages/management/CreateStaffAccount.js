import React from 'react';
import {ErrorMessage, Field, useFormik} from 'formik';
import * as Yup from "yup";
import {ref, getDownloadURL, uploadBytes} from "firebase/storage";
import storage from "../../firebase/storage";


const SignupForm = () => {
    const SchemaError = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too short")
            .required("Please fill out this field"),
        username: Yup.string()
            .min(2, "Too short")
            .required("Please fill out this field"),
        password: Yup.string()
            .required("Please fill out this field"),
        age: Yup.number()
            .min(18, "Must be over 18")
            .max(60, "Must be under 60")
            .required("Please fill out this field"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, "invalid phone number")
            .required("Please fill out this field"),
        address: Yup.string().required("Please fill out this field"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Please fill out this field"),
        salary: Yup.number()
            .min(0, "Salary must be greater than or equal to 0")
            .max(100000000, "Salary must be less than or equal to 100000000")
            .required("Please fill out this field"),
        role: Yup.string()
            .required("Please fill out this field"),
    });

    const handleFileChange = async (event) => {
        setFile(event.target.files[0]);
        handleUpload(event.target.files[0])
    }
    const handleUpload = (file) => {
        if (!file) {
            alert("Please upload an image first!");
        }else{
            const storageRef = ref(storage, `/files/${file.name}`)
            uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (url) => {
                    formik.setFieldValue('image', url);
                });
            });
        }
    };

    const formik = useFormik({
        initialValues:  {
            username: '',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbG0nZsnR6U_wF4z653xXuHXThpROLnsBPw&usqp=CAU',
            email: '',
            password: '',
            role: 'staff',
            name: '',
            age: '',
            phoneNumber: '',
            address: '',
            salary: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="row">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'green',
                                fontWeight: 'bold',
                                marginBottom: 20
                            }}>
                            <h3>
                                ADD STAFF ACCOUNT
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4 mb-3">
                            <div className="product-images">
                                <div className="product-main-img"/>
                                <p style={{marginLeft: 50}}>Click here to choose an image</p>
                                <img style={{
                                    width: 300,
                                    height: 300,
                                    marginTop: 30,
                                    marginLeft: 50,
                                    borderRadius: 5,
                                    border: "1px solid #ddd",
                                    padding: 5,
                                }}

                                     onClick={(e)=>{
                                         const input = document.createElement("input");
                                         input.type = "file";
                                         input.accept = "image/jpeg,image/png";
                                         input.addEventListener('change', handleUpload);
                                         input.click();
                                     }}

                                     src={formik.values.image} alt="" />
                            </div>
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <div>
                                <label htmlFor="username">Username</label>
                                <Field type="text" className="form-control mt-1" name="username" placeHolder='Username'/>
                                <p style={{color: "red"}}><ErrorMessage name="username"/></p>
                            </div>
                            <div>
                                <label htmlFor="username">Full name</label>
                                <Field type="text" className="form-control mt-1" name="name"/>
                                <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" className="form-control mt-1" name="email"/>
                                <p style={{color: "red"}}><ErrorMessage name="email"/></p>
                            </div>
                            <div>
                                <label htmlFor="age">Age</label>
                                <Field type="number" className="form-control mt-1" name="age"/>
                                <p style={{color: "red"}}><ErrorMessage name="age"/></p>
                            </div>
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="text" className="form-control mt-1" name="password"  value = {value.password}/>
                                <p style={{color: "red"}}><ErrorMessage name="password"/></p>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Field type="text" className="form-control mt-1" name="phoneNumber"/>
                                <p style={{color: "red"}}><ErrorMessage name="phoneNumber"/></p>
                            </div>
                            <div>
                                <label htmlFor="salary">Salary</label>
                                <Field type="number" className="form-control mt-1" name="salary"/>
                                <p style={{color: "red"}}><ErrorMessage name="salary"/></p>
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <Field as="textarea" type="text" className="form-control mt-1" name="address"/>
                                <p style={{color: "red"}}><ErrorMessage name="address"/></p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
};