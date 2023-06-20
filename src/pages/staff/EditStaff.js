import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, FormikProvider, useFormik} from "formik";
import {ref, getDownloadURL, uploadBytes} from "firebase/storage";
import storage from "../../firebase/storage";
import * as Yup from "yup";


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
const EditStaff = () => {

    const [file, setFile] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();



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
            console.log(values);
            // dispatch(addStaffAccount(values)).then(() => {navigate('/admin')})
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
                                         Staff Information
                                    </h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4 mb-3 part1">
                                    <div className="product-images">
                                        <div className="product-main-img"/>
                                        <p style={{marginLeft: 35}}>Click here to choose an image</p>
                                        <img style={{
                                            width: 'calc(100% - 50px)',
                                            height: 300,
                                            marginTop: 0,
                                            marginLeft: 30,
                                            borderRadius: 5,
                                            border: "1px solid #ddd",
                                            padding: 5,
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
                                <div className="col-4 mb-3 part2">
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
                                <div className="col-4 mb-3 part3">
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <Field type="text" className="form-control mt-1" name="password"  value = {formik.values.password}/>
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
                </Form>
            </FormikProvider>
        </>
    );
};

export default EditStaff;




//add staff

// import axios from "axios";
// import {createAsyncThunk} from "@reduxjs/toolkit";
//
//
// export const addStaff = createAsyncThunk(
//     'staffs/addStaff',
//     async (values) => {
//         try {
//             const response = await axios.post('http://localhost:3001/admin/add-staff', values);
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );



//add staff slice
// const initialState = {
//     listStaff: []
// }
//
// const adminSlice = createSlice(
//     {
//         name: 'admin',
//         initialState,
//         reducers: {},
//         extraReducers: builder => {
//             builder.addCase(addStaff.fulfilled, (currentState, action)=>{
//                 currentState.listStaff.push(action.payload)
//             })
//         }
//     }
// )
// export default adminSlice.reducer








