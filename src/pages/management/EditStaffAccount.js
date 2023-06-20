import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from '../../firebase/storage'
import {useSelector} from "react-redux";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .required("Please fill out this field"),
    username: Yup.string()
        .min(2, "Too short")
        .required("Please fill out this field"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Please fill out this field"),
    age: Yup.number()
        .min(18, "You could not change your age to under 18")
        .required("Please fill out this field"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "invalid phone number")
        .required("Please fill out this field"),
    address: Yup.string().required("Please fill out this field"),

});






function EditStaffAccount() {
    const currentUser = {
        username: 'trang',
        name: 'Vi Quynh Trang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbG0nZsnR6U_wF4z653xXuHXThpROLnsBPw&usqp=CAU',
        email: 'vitrang29@gmail.com',
        password: '12345678',
        age: 20,
        phoneNumber: '0359371623',
        address: 'address',
        salary: 10000,
        store: null,
        role: '',
    }

    // const currentUser = useSelector(({client}) => {
    //     return client.currentUser
    // })

    const [file, setFile] = useState('');
    const [image, setImage] = useState(currentUser.image);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        handleUpload(e.target.files[0])
    }

    const handleUpload = (file) => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                setImage(url);
            });
        });
    };
    return (
        <>
            <div style={{marginTop: "-20%"}}>
                <Formik
                    initialValues={{
                        username: currentUser.username,
                        name: currentUser.name,
                        email: currentUser.email,
                        password: currentUser.password,
                        age: currentUser.age,
                        phoneNumber: currentUser.phoneNumber,
                        address: currentUser.address,
                        salary: currentUser.salary,
                        store: null,
                        role: currentUser.role
                    }}
                    validationSchema={SchemaError}
                    onSubmit={(values) => {
                        values.image = image
                        console.log(values)
                        // dispatch(updateAccount(values)).then(() => {navigate('/staff');});
                    }}
                    enableReinitialize={true}
                >
                    {({values, handleChange}) => (
                        <Form>
                            <div className="container py-5" style={{
                                marginTop: 300
                            }}>
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
                                                EDIT STAFF ACCOUNT
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
                                                         input.addEventListener('change', handleFileChange);
                                                         input.click();
                                                     }}

                                                     src={image} alt="" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4 mb-3">
                                            <div>
                                                <label htmlFor="username">Username</label>
                                                <Field type="text" className="form-control mt-1" name="username" value={values.username} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="username"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="name">Full name</label>
                                                <Field type="text" className="form-control mt-1" name="name" value={values.name} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <Field readOnly type="email" className="form-control mt-1" name="email" values={values.email}/>
                                            </div>
                                            <div>
                                                <label htmlFor="age">Age</label>
                                                <Field type="number" className="form-control mt-1" name="age" value={values.age} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="age"/></p>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4 mb-3">
                                            <div>
                                                <label htmlFor="password">Password</label>
                                                <Field type="text" className="form-control mt-1" name="password"  value={values.password} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="password"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="phoneNumber">Phone number</label>
                                                <Field type="text" className="form-control mt-1" name="phoneNumber" value={values.phoneNumber} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="phoneNumber"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="salary">Salary</label>
                                                <Field readOnly type="number" className="form-control mt-1" name="salary" value={values.salary}/>
                                            </div>
                                            <div>
                                                <label htmlFor="address">Address</label>
                                                <Field as="textarea" type="text" className="form-control mt-1" name="address" value={values.address} onChange={handleChange}/>
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
                    )}
                </Formik>
            </div>
        </>
    );
}

export default EditStaffAccount;

//edit account service

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
//
// export const updateStaffAccount = createAsyncThunk(
//     'staff/updateStaffAccount',
//     async (updateUser) => {
//         try {
//             const res = await axios.put('http://localhost:3001/staff/update-account', updateUser);
//             return updateUser;
//         } catch (error) {
//             console.log(error)
//             throw error;
//         }
//     }
// );


//edit account service



// const initialState = {
//     currentUser: JSON.parse(localStorage.getItem('client')),
// }
// const useSlice = createSlice({
//     name: 'client',
//     initialState,
//     extraReducers: builder => {
//         builder.addCase(updateStaffAccount.fulfilled, (state, action) => {
//             state.currentUser = action.payload;
//             localStorage.setItem('client', JSON.stringify(action.payload));
//         })
//     }
// })
//
// export default useSlice.reducer;












