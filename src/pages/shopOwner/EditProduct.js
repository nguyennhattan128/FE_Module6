import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../../firebase/storage";
import * as Yup from "yup";
import React from 'react';
import Swal from "sweetalert2";
import {getCategories} from "../../service/store/categoryService";
import {editProduct, getOneProduct} from "../../service/users/sellerService";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .required("Please fill out this field"),
    price: Yup.number().typeError('Price must be a number')
        .required('Please fill out this field'),
    quantity: Yup.number().typeError('Quantity must be a number')
        .required('Please fill out this field'),
    category: Yup.number()
        .required('Please select a valid category'),
});

function EditProduct() {
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const { id: productId } = useParams();
    console.log(productId);
    const [productFetched, setProductFetched] = useState(false);
    const [categoryFetched, setCategoryFetched] = useState(false);

    const dispatch = useDispatch();

    const currentProduct = useSelector(({store})=>{
        if(productFetched === true){
            console.log(store.currentProduct)
            return store.currentProduct;
        }
        return null
    })

    const listCategory = useSelector(({category})=>{
        if(categoryFetched){
            console.log(category.listCategory)
            return category.listCategory
        }
        return []
    })


    useEffect(() => {
        dispatch(getOneProduct(productId)).then(()=>{
            setProductFetched(true)
        });
        dispatch(getCategories()).then(()=>{
            setCategoryFetched(true)
        })
    }, [dispatch,productId]);


    const handleFileChange = async (event, setFieldValue, values) =>{
        const selectedFiles = event.target.files;
        console.log(selectedFiles)
        if(selectedFiles){
            const uploadFiles = Array.from(selectedFiles);
            setFiles((files));
            await handleUpload(uploadFiles, setFieldValue, values)
        }
    }

    const handleUpload = async (files, setFieldValue, values) => {
        if (!files) {
            alert("Please upload an image first!");
        }
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
            let imageListLength = values.listImage.length + imageUrls.length
            let issValid = imageListLength <= 4;
            if(!issValid){
                Swal.fire({
                    title: "You are only allowed to select up to 4 image files",
                    confirmButtonColor: "green",
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                })
            }else{
                setFieldValue("listImage", [...values.listImage, ...imageUrls]);
                setFiles([]);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleDeleteMainImage = async (event, listImage, setFieldValue) =>{
        let newImages = [...listImage]
        newImages.splice(0, 1)
        setFieldValue('listImage', newImages)
    }

    const handleDeleteSubImage = async (event, index, listImage, setFieldValue) => {
        if (index >= 0 && index < listImage.slice(1).length) {
            const newImages = listImage.filter((_, i) => i !== index + 1);
            setFieldValue('listImage', newImages);
        }
    };


    return (
        <>
            {currentProduct && (
                <Formik
                    initialValues={{
                        id: currentProduct.id,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        quantity: currentProduct.quantity,
                        category: currentProduct.category.id,
                        listImage: [currentProduct.image, ...(Array.isArray(currentProduct.images) ? currentProduct.images : [])]
                    }}
                    validationSchema={SchemaError}
                    onSubmit={(values) => {
                        const { listImage, ...updateValues } = values;
                        const [image, ...images] = listImage;
                        updateValues.image = image;
                        console.log(updateValues)
                        console.log(images)
                        dispatch(editProduct({
                            updateProduct: updateValues,
                            images: images,
                            productId: productId
                        })).then(()=>{
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Product has been updated successfully',
                                showConfirmButton: false,
                                timer: 1000
                            })
                        })
                        setTimeout(() => {
                            navigate('/shop-owner');
                        }, 3000);
                    }}
                >
                    {({values, handleChange, setFieldValue})=>(
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
                                                EDIT PRODUCT
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4 mb-3">
                                            <div className="product-images">
                                                {values.listImage[0] ? (
                                                    <div>
                                                        <img
                                                            src={values.listImage[0]}
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
                                                                top: -297,
                                                                right: -285,
                                                                lineHeight: "23px",
                                                                fontWeight: "bold"
                                                            }}
                                                            onClick={(e) => handleDeleteMainImage(e, values.listImage, setFieldValue)}>x</button>
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
                                                                cursor: "pointer"
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="product-gallery" style={{ display: "flex"}}>
                                                {values.listImage.slice(1).map((url, index) => (
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
                                                                onClick={(e) => handleDeleteSubImage(e, index, values.listImage, setFieldValue)}
                                                        >x</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group col-md-8 mb-3">
                                            <div style={{marginBottom: 30}}>
                                                <input  type="file"
                                                        multiple
                                                        onChange={(e) =>{handleFileChange(e, setFieldValue, values)}}
                                                        accept="image/jpeg,image/png"/>
                                            </div>

                                            <div>
                                                <label htmlFor="name">Product name</label>
                                                <Field type="text" className="form-control mt-1" placeholder="Product Name" name='name' value={values.name} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="name"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="price">Price</label>
                                                <Field type="text" className="form-control mt-1" placeholder="Price" name='price' value={values.price} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="price"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="quantity">Quantity</label>
                                                <Field type="text" className="form-control mt-1" placeholder="Quantity" name='quantity' value={values.quantity} onChange={handleChange}/>
                                                <p style={{color: "red"}}><ErrorMessage name="quantity"/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="category">Category</label>
                                                <Field as="select" className="form-control mt-1" name="category" onChange={handleChange}
                                                       style={{
                                                           fontFamily: "Roboto",
                                                           fontSize: "1.1rem",
                                                           color: "#777777"}}>
                                                    <option value="">Select a category</option>
                                                    {listCategory && listCategory.map((item) => (
                                                        <option
                                                            key={item.id}
                                                            value={item.id}
                                                            selected={item.id === values.category.id}
                                                        >
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </Field>
                                                <p style={{color:"red"}}>
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
                    )}
                </Formik>
            )}
        </>
    );
}

export default EditProduct