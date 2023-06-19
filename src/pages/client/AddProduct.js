import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, FormikProvider, useFormik} from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/storage";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .required("Please fill out this field"),
    price: Yup.number().typeError('Price must be a number')
        .required('Please fill out this field'),
    quantity: Yup.number().typeError('Quantity must be a number')
        .required('Please fill out this field'),
    category: Yup.string()
        .required('Please select a valid category'),
});


const AddProduct = () => {

    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = useState(true)


    // const listCategory = useSelector(({listCategory})=>{
    //     return category.listCategory
    // })


    let listCategory = [
        {id: 1,
            name: 'Clothes'}
        ,
        {id: 2,
            name: 'Foods'}
    ]


    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            image: '',
            category: '',
            images: []
        },
        validationSchema: SchemaError,
        onSubmit: (values) => {
            values.image = values.images[0]
            values.images = values.images.slice(1)
            console.log(values);
            // dispatch(addProduct(values)).then(() => {navigate('/store')})
        }
    });

    const handleFileChange = async (event) => {
        const selectedFiles = Array.from(event.target.files);
        console.log(selectedFiles);
        setFiles(selectedFiles);
    }


    const handleDeleteMainImage = async (event, index) =>{
        let newImages = [...formik.values.images]
        newImages.splice(0, 1)
        formik.setFieldValue('images', newImages)
    }

    const handleDeleteSubImage = async (event, index) => {
        if (index >= 0 && index < formik.values.images.slice(1).length) {
            const newImages = formik.values.images.filter((_, i) => i !== index + 1);
            formik.setFieldValue('images', newImages);
        }
    };


    useEffect(() => {
        if (files.length > 0) {
            console.log('run use effect')
            handleUpload();
        }
    }, [files]);



    const handleUpload = async () => {
        setIsSubmit(true)
        const uploadPromises = files.map((file) => {
            const storageRef = ref(storage, `/files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            return new Promise((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    null,
                    reject,
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((url) => {
                                resolve(url);
                            })
                            .catch(reject);
                    }
                );
            });
        });

        try {
            const imageUrls = await Promise.all(uploadPromises);
            let totalFile = [...formik.values.images].length + [...imageUrls].length;
            let isValid = totalFile <= 4;

            if(!isValid){
                Swal.fire('You are only allowed to select up to 4 image files');
            } else {
                formik.setFieldValue("images", [...formik.values.images, ...imageUrls]);
                setIsSubmit(false);
                setFiles([]);
            }
        } catch (error) {
            console.error(error);
        }
    };





    return (
        <>
            <FormikProvider value={formik}>
                <Form>
                    <div className="container py-5">
                        <div className="row py-5">
                                <div className="row">
                                    <div className="form-group col-md-4 mb-3">
                                        <div className="product-images">
                                            {formik.values.images[0] ? (
                                                <div>
                                                    <img
                                                        src={formik.values.images[0]}
                                                        alt=""
                                                        style={{
                                                            width: 300,
                                                            height: 300,
                                                            border: "1px solid #ddd",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                        }}
                                                    />
                                                    <button
                                                        className="delete-icon"
                                                        style={{
                                                            borderRadius: "50%",
                                                            border: "none",
                                                            width: "25px",
                                                            height: "25px",
                                                            cursor: "pointer",
                                                            position: "relative",
                                                            color: "green",
                                                            backgroundColor: "lightgreen",
                                                            top: -120,
                                                            right: 40,
                                                            lineHeight: "23px",
                                                            fontWeight: "bold",
                                                        }}
                                                        onClick={(e) => handleDeleteMainImage(e)}>x</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <img
                                                        src='https://img.freepik.com/icones-gratuites/photo_318-198172.jpg'
                                                        alt="product image"
                                                        style={{
                                                            width: 300,
                                                            height: 300,
                                                            border: "1px solid #ddd",
                                                            borderRadius: 5,
                                                            padding: 5,
                                                        }}
                                                        onClick={(e)=>{
                                                            const input = document.createElement("input");
                                                            input.type = "file";
                                                            input.multiple = true;
                                                            input.accept = "image/jpeg,image/png";
                                                            input.addEventListener('change', handleFileChange);
                                                            input.click();
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="product-gallery" style={{ display: "flex"}}>
                                            {formik.values.images.slice(1).map((url, index) => (
                                                <div style={{position: 'relative', width: 120, height: 120}}>
                                                    <img
                                                        key={index}
                                                        style={{ width: 100, height: 100, borderRadius: 5, marginTop: 20,  border: '1px solid #ddd', padding:5}}
                                                        src={url}
                                                        alt=""

                                                    />
                                                    <button className="delete-icon"
                                                            style={{
                                                                borderRadius: "50%",
                                                                border: "none",
                                                                width: "25px",
                                                                height: "25px",
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                top: 25,
                                                                right:25,
                                                                color: 'green',
                                                                lineHeight: '23px',
                                                                backgroundColor: 'lightgreen',
                                                                ':hover': {
                                                                    backgroundColor: 'red',
                                                                    color: 'red',
                                                                },
                                                            }}
                                                            onClick={(e) => handleDeleteSubImage(e, index)}
                                                    >x</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3">
                                        <div>
                                            <label htmlFor="name">Select product images</label>
                                            <input
                                                type="file"
                                                name='images'
                                                multiple
                                                onChange={(e) =>{handleFileChange(e)}}
                                                accept="image/jpeg,image/png"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="name">Product name</label>
                                            <Field type="text" className="form-control mt-1" placeholder="Product Name" name='name'/>
                                            <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="price">Price</label>
                                            <Field type="text" className="form-control mt-1" placeholder="Price" name='price'/>
                                            <p style={{color: "red"}}><ErrorMessage name="price"/></p>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4 mb-3" style={{marginTop:58}}>
                                        <div>
                                            <label htmlFor="quantity">Quantity</label>
                                            <Field type="text" className="form-control mt-1" placeholder="Quantity" name='quantity'/>
                                            <p style={{color: "red"}}><ErrorMessage name="quantity"/></p>
                                        </div>
                                        <div>
                                            <label htmlFor="category">Category</label>
                                            <Field as="select" className="form-control mt-1" name="category"
                                                   style={{
                                                       fontFamily: "Roboto",
                                                       fontSize: "1.1rem",
                                                       color: "#777777"}}>
                                                <option value="">Select a category</option>
                                                {listCategory && listCategory.map((item) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </Field>
                                            <p style={{color: "red"}}>
                                                <ErrorMessage name="category"/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-end mt-2" >
                                            <button type="submit" className="btn btn-success btn-lg px-3">SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Form>
        </FormikProvider>
        </>
    );
};

export default AddProduct;





// get category service

// import axios from "axios";
// import {createAsyncThunk} from "@reduxjs/toolkit";
// export const getCategories = createAsyncThunk(
//     'categories/getAll',
//     async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/categories');
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

//get category slice


// const initialState = {
//     listCategory: []
// }
// const categorySlice = createSlice(
//     {
//         name: 'Category',
//         initialState,
//         reducers: {},
//         extraReducers: builder => {
//             builder.addCase(getCategories.fulfilled, (currentState, action)=>{
//                 currentState.listCategory = action.payload
//             })
//
//         }
//     }
// )
// export default categorySlice.reducer


//add product service

// export const addProduct = createAsyncThunk(
//     'products/addProduct',
//     async (values) => {
//         try {
//             const newProduct = await axios.post('http://localhost:3001/store/add-product', values);
//             return newProduct.data;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// );

//add product slice

// const initialState = {
//     listProduct: [],
//     currentProduct: null
// }
// const storeSlice = createSlice(
//     {
//         name: 'Product',
//         initialState,
//         reducers: {},
//         extraReducers: builder => {
//             builder.addCase(addProduct.fulfilled, (currentState, action)=>{
//                 currentState.listProduct.push(action.payload)
//             })
//         }
//     }
// )
// export default storeSlice.reducer












