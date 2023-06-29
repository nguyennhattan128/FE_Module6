import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, FormikProvider, useFormik} from "formik";
import {ref, getDownloadURL, uploadBytes} from "firebase/storage";
import storage from "../../firebase/storage";
import * as Yup from "yup";
import {addStaff} from "../../service/staff/staffService";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";


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

const AddStaffAccount = () => {
    const [error, setError] = useState({
        message: "sai roi",
        success: true
    });
    const [file, setFile] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            username: '',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbG0nZsnR6U_wF4z653xXuHXThpROLnsBPw&usqp=CAU',
            email: '',
            password: '123456@Abc',
            role: 'staff',
            name: '',
            age: '',
            phoneNumber: '',
            address: '',
            salary: ''
        },
        validationSchema: SchemaError,
        onSubmit: (values) => {
            dispatch(addStaff(values)).then((data) => {
                console.log(data.payload.success,data.payload.data)
               if(data.payload.success === false){
                   setError({
                       message: data.payload.data,
                       success: false
                   })
                   console.log(error)
               }else {
                   Swal.fire({
                       position: 'center',
                       icon: 'success',
                       title: 'New staff has been saved successfully',
                       showConfirmButton: false,
                       timer: 1500
                   })

                   setTimeout(()=>{
                       navigate('/admin')
                   }, 2000)

               }
                })
        }
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

    return (
        <>
            <div style={{marginTop: "-30px"}}>
                <FormikProvider value={formik}>
                    <Form>
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
                                            <p style={{marginLeft: 25}}>Click here to choose an image</p>
                                            <img style={{
                                                width: 300,
                                                height: 300,
                                                marginTop: 5,
                                                borderRadius: 5,
                                                border: "1px solid #ddd",

                                            }}

                                                 onClick={(e)=>{
                                                     const input = document.createElement("input");
                                                     input.type = "file";
                                                     input.accept = "image/jpeg,image/png";
                                                     input.addEventListener('change', handleFileChange);
                                                     input.click();
                                                 }}

                                                 src={formik.values.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3">
                                        <div>
                                            <Field type="text" className="form-control mt-1" name="username" placeHolder='Username'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="username"/></p>
                                        </div>
                                        <div>
                                            <Field type="text" className="form-control mt-1" name="name" placeHolder='Fullname'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="name"/></p>
                                        </div>
                                        <div>
                                            <Field type="email" className="form-control mt-1" name="email" placeHolder='Email'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="email"/></p>
                                        </div>
                                        <div>
                                            <Field type="number" className="form-control mt-1" name="age" placeHolder='Age'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="age"/></p>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3">
                                        <div>
                                            <Field type="text" className="form-control mt-1" name="password"  value = {formik.values.password}/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="password"/></p>
                                        </div>
                                        <div>
                                            <Field type="text" className="form-control mt-1" name="phoneNumber" placeHolder='Phone Number'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="phoneNumber"/></p>
                                        </div>
                                        <div>
                                            <Field type="number" className="form-control mt-1" name="salary" placeHolder='Salary'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="salary"/></p>
                                        </div>
                                        <div>
                                            <Field as="textarea" type="text" className="form-control mt-1" name="address" placeHolder='Address'/>
                                            <p style={{color: "red", marginTop: "10px"}}><ErrorMessage name="address"/></p>
                                        </div>
                                        <div style={{textAlign: "right", marginTop: "20px"}}>
                                            {error.success === false ? <div style={{color:"red"}}> {error.message} </div> : <></>}
                                            <button type="submit" className="btn btn-success btn-lg px-3">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </>
    );
};

export default AddStaffAccount;









