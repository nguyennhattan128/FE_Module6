import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from '../../firebase/storage'
import {useDispatch, useSelector} from "react-redux";
import {getStoreTypes} from "../../service/store/storeTypeService";
import {editShop, getOwnShop} from "../../service/users/sellerService";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    telephone: Yup.string()
        .matches(/^[0-9]{10}$/, "invalid phone number")
        .required("Please fill out this field"),
    address: Yup.string()
        .min(5, 'Address must be at least 5 characters')
        .max(200, 'Address must be less than 200 characters')
        .required('Address is required'),
    origin: Yup.string()
        .min(2, 'Origin must be at least 2 characters')
        .max(50, 'Origin must be less than 50 characters')
        .required('Origin is required'),
    country: Yup.string()
        .min(2, 'Country must be at least 2 characters')
        .max(50, 'Country must be less than 50 characters')
        .required('Country is required'),
    storeType: Yup.number()
        .required('Store type is required')
});



function EditShop() {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [fetchedProduct, setFetchedProduct] = useState(false)

    const currentShop = useSelector(({store}) => {
        if(fetchedProduct){
            return store.currentShop
        }

    })

    const listStoreType = useSelector(({storeType})=>{
        return storeType.listStoreType
    })

    useEffect(() => {
        dispatch(getStoreTypes())
        dispatch(getOwnShop()).then(()=>{
            setFetchedProduct(true)
        })
    }, []);

    const [file, setFile] = useState('');

    const handleFileChange = (e, setFieldValue) => {
        const fileUpload = e.target.files[0];
        if(fileUpload){
            setFile(fileUpload)
            handleUpload(fileUpload, setFieldValue)
        }

    }

    const handleUpload = (file, setFieldValue) => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                setFieldValue('avatar', url);
            });
        });
    };
    return (
        <>
            {currentShop? (
                <div >
                    <Formik
                        initialValues={{
                            name: currentShop.name,
                            email: currentShop.email,
                            avatar: currentShop.avatar,
                            telephone: currentShop.telephone,
                            address: currentShop.address,
                            origin: currentShop.origin,
                            country: currentShop.country,
                            storeType: currentShop.storeType.id,
                            status: currentShop.status
                        }}
                        validationSchema={SchemaError}
                        onSubmit={(values) => {
                            dispatch(editShop(values)).then(()=>{
                                Swal.fire({
                                    title: "Store information has been successfully updated",
                                    icon: "success",
                                    confirmButtonColor: "green",
                                    confirmButtonText: "OK",
                                    customClass: {
                                        confirmButton: "btn btn-success",
                                    },
                                })
                            }).then(() => {navigate('/');});
                        }}
                        enableReinitialize={true}
                    >
                        {({values, handleChange, setFieldValue}) => (
                            <Form>
                                <div className="container py-5" style={{marginLeft: -20, marginTop: -20}}>
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
                                                    EDIT YOUR SHOP INFORMATION
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-4 mb-3">
                                                <div className="product-images">
                                                    <div className="product-main-img"/>
                                                    <p style={{marginLeft: 50}}>Click here to choose new image</p>
                                                    <img style={{
                                                        width: 300,
                                                        height: 300,
                                                        marginTop: 10,
                                                        marginLeft: 25,
                                                        borderRadius: 5,
                                                        border: "1px solid #ddd",
                                                        padding: 5,
                                                    }}

                                                         onClick={(e) => {
                                                             const input = document.createElement("input");
                                                             input.type = "file";
                                                             input.accept = "image/jpeg,image/png";
                                                             input.addEventListener('change', (e) => handleFileChange(e, setFieldValue));
                                                             input.click();
                                                         }}

                                                         src={values.avatar} alt="" />
                                                </div>
                                            </div>
                                            <div className="form-group col-md-8 mb-3">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div>
                                                            <label htmlFor="name">Shop name</label>
                                                            <Field type="text" className="form-control mt-1" name="name" value={values.name} onChange={handleChange}/>
                                                            <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email">Email</label>
                                                            <Field type="email" className="form-control mt-1" name="email" value={values.email} onChange={handleChange}/>
                                                            <p style={{color: "red"}}><ErrorMessage name="email"/></p>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="telephone">Telephone</label>
                                                            <Field type="text" className="form-control mt-1" name="telephone" value={values.telephone} onChange={handleChange}/>
                                                            <p style={{color: "red"}}><ErrorMessage name="telephone"/></p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div>
                                                            <label htmlFor="origin">Origin</label>
                                                            <Field type="text" className="form-control mt-1" name="origin" value={values.origin} onChange={handleChange}/>
                                                            <p style={{color: "red"}}><ErrorMessage name="origin"/></p>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="country">Country</label>
                                                            <Field type="text" className="form-control mt-1" name="country" value={values.country} onChange={handleChange}/>
                                                            <p style={{color: "red"}}><ErrorMessage name="country"/></p>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="category">StoreType</label>
                                                            <Field as="select" className="form-control mt-1" name="storeType" onChange={handleChange}
                                                                   style={{
                                                                       fontFamily: "Roboto",
                                                                       fontSize: "1.1rem",
                                                                       color: "#777777"
                                                                   }}>
                                                                <option value="">Select a category</option>
                                                                {listStoreType && listStoreType.map((item) => (
                                                                    <option
                                                                        key={item.id}
                                                                        value={item.id}
                                                                        selected={item.id === currentShop.storeType.id}
                                                                    >
                                                                        {item.name}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                            <p style={{color: "red"}}>
                                                                <ErrorMessage name="storeType"/>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="address">Address</label>
                                                        <Field as="textarea" type="text" className="form-control mt-1" name="address" value={values.address} onChange={handleChange}/>
                                                        <p style={{color: "red"}}><ErrorMessage name="address"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col text-end mt-2" style={{marginRight: 20}}>
                                                    <button type="submit" className="btn btn-success btn-lg px-3">SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            ): (
                <div>Current shop not found</div>
            )}


        </>
    );
}

export default EditShop;