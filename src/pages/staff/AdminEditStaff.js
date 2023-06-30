import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from '../../firebase/storage'
import {useDispatch, useSelector} from "react-redux";
import {updateUserInformation} from "../../service/users/userService";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import customAPI from "../../service/customAPI";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .required("Please fill out this field"),
    username: Yup.string()
        .min(2, "Too short")
        .required("Please fill out this field"),
    age: Yup.number()
        .min(18, "You could not change your age to under 18")
        .required("Please fill out this field"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "invalid phone number")
        .required("Please fill out this field"),
    address: Yup.string().required("Please fill out this field"),
    password: Yup.string()
        .min(6, "Password must be minimum 6 digits!")
        .required("Password Required!"),

});

function AdminEditStaff() {
    const navigate = useNavigate();
    const idStaff = useParams().id


    const [file, setFile] = useState('');
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(user ? user.image : null);

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

    const editStaff = (idStaff, staff) => {
        customAPI().put(`admin/edit-staff/${idStaff}`, staff)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your account has been updated successfully',
                    showConfirmButton: false,
                    timer: 1000
                })
                setTimeout(() => {
                    navigate('/admin');
                }, 2000);
            })
            .catch((error)=> {
            console.log(error)
        })


    }
    useEffect( () => {
        customAPI().get(`staff/find-staff/${idStaff}`) //khi không dùng redux đây là cách xử lý khi get dữ liệu ra
            .then(staff => {
                setUser(staff.data.data)
            });

    }, [])


    return (
        <> {user ?
            <Formik
                initialValues={{
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    name: user.name,
                    address: user.address,
                    image: image,
                    age: user.age,
                    salary: user.salary,
                    phoneNumber: user.phoneNumber,
                }}
                validationSchema={SchemaError}
                onSubmit={(values) => {
                    values.image = image;
                    editStaff(idStaff, values)

                }}
                enableReinitialize={true}
            >
                {({values, handleChange}) => (
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
                                    <div className="form-group col-md-4 mb-3" style={{marginRight: -30}}>
                                        <div className="product-images">
                                            <div className="product-main-img"/>
                                            <p style={{marginLeft: 50}}>Click here to choose an image</p>
                                            <img style={{
                                                width: 300,
                                                height: 300,
                                                marginTop: 3,
                                                borderRadius: 5,
                                                border: "1px solid #ddd",
                                                padding: 5,
                                            }}

                                                 onClick={(e) => {
                                                     const input = document.createElement("input");
                                                     input.type = "file";
                                                     input.accept = "image/jpeg,image/png";
                                                     input.addEventListener('change', handleFileChange);
                                                     input.click();
                                                 }}

                                                 src={image ? values.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHKr4J28Bd2GLN_c-P4FtX99NIFVS6rTurA&usqp=CAU'}
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="username">Username</label>
                                            <Field type="text" className="form-control mt-1" name="username"
                                                   value={values.username} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="username"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="name">Full name</label>
                                            <Field type="text" className="form-control mt-1" name="name"
                                                   value={values.name} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <Field  type="email" className="form-control mt-1" name="email"
                                                   values={values.email}/>
                                        </div>
                                        <div>
                                            <label htmlFor="age">Age</label>
                                            <Field type="number" className="form-control mt-1" name="age"
                                                   value={values.age} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="age"/></p>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="phoneNumber">Phone number</label>
                                            <Field type="text" className="form-control mt-1" name="phoneNumber"
                                                   value={values.phoneNumber} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="phoneNumber"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="salary">Salary</label>
                                            <Field  type="number" className="form-control mt-1" name="salary"
                                                   value={values.salary}/>
                                        </div>
                                        <div>
                                            <label htmlFor="address">Address</label>
                                            <Field as="textarea" type="text" className="form-control mt-1"
                                                   name="address" value={values.address} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="address"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="address">Password</label>
                                            <Field as="textarea" type="text" className="form-control mt-1"
                                                   name="password" value={values.password} onChange={handleChange}/>
                                            <p style={{color: "red"}}><ErrorMessage name="password"/></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-end mt-2"
                                         style={{
                                             marginLeft: -30,
                                             marginBottom: -40
                                         }}>
                                        <button type="submit" className="btn btn-success btn-lg px-3">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            : <></>}

        </>
    );
}

export default AdminEditStaff;















