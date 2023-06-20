import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from '../../firebase/storage'
import {useSelector} from "react-redux";

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
    const currentShop = {
        name: 'My shop',
        email: 'shop@gmail.com',
        avatar: 'https://www.appypie.com/wp-content/uploads/2021/12/online-store-mob.svg',
        telephone: '0359371623',
        address: 'Ha Noi, Viet Nam',
        origin: 'Viet Nam',
        country: 'Viet Nam',
        storeType: 1,
    }

    let listStoreType = [
        {id: 1, name: 'Local Store'},
        {id: 2, name: 'Global Store'},
        {id: 3, name: 'Shopee Mall'},
    ]


    // const currentShop = useSelector(({client}) => {
    //     return client.shop
    // })

    // const listStoreType = useSelector(({storeType})=>{
    //     return storeType.listStoreType
    // })

    // useEffect(() => {
    //     dispatch(getStoreType())
    //     dispatch(getStore())
    // }, []);



    const [file, setFile] = useState('');
    const [avatar, setAvatar] = useState(currentShop.avatar);

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
                setAvatar(url);
            });
        });
    };
    return (
        <>
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
                        storeType: currentShop.storeType,
                    }}
                    validationSchema={SchemaError}
                    onSubmit={(values) => {
                        values.avatar = avatar
                        console.log(values)
                        // dispatch(editShop(values)).then(() => {navigate('/');});
                    }}
                    enableReinitialize={true}
                >
                    {({values, handleChange}) => (
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
                                                    marginTop: 15,
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

                                                     src={avatar} alt="" />
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
                                                                    selected={item.id === values.storeType}
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
        </>
    );
}

export default EditShop;


//getStoreType service

// import axios from "axios";
// import {createAsyncThunk} from "@reduxjs/toolkit";
// export const getStoreTypes = createAsyncThunk(
//     'storeTypes/getAll',
//     async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/store-type');
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );




//getStoreType slice
// const initialState = {
//     listStoreType: []
// }
// const storeTypeSlice = createSlice(
//     {
//         name: 'StoreType',
//         initialState,
//         reducers: {},
//         extraReducers: builder => {
//             builder.addCase(getStoreTypes.fulfilled, (currentState, action)=>{
//                 currentState.listStoreType = action.payload
//             })
//         }
//     }
// )
// export default storeTypeSlice.reducer



//edit shop service
// import {createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
// export const editStore = createAsyncThunk(
//     'shopOwner/editShop',
//     async (editShop) => {
//         try {
//             const response = await axios.post('http://localhost:3001/store/edit-shop', editShop);
//             return editShop
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );




//edit shop slice
// const initialState = {
//     shop: {}
// }
//
// const shopOwnerSlice = createSlice({
//     name: 'shopOwner',
//     initialState,
//     extraReducers: builder => {
//         builder.addCase(editStore.fulfilled, (state, action) => {
//             state.shop = action.payload;
//         })
//     }
// })
//
// export default shopOwner.reducer;




























