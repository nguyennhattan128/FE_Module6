import "./detail.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductDetail} from "../../service/product/ProductService";
import {addToOrder, buyProduct} from "../../service/order/orderService";
import {useNavigate, useParams} from "react-router-dom";
import customAPI from "../../service/customAPI";


export default function ProductDetail() {
    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
    })
    const {id} = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [fetchProduct, setFetchProduct] = useState(false)
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState();

    useEffect(() => {
        customAPI().get(`/products/product-detail/${id}`)
            .then(res => {
                console.log('axios get product:', res);
                setCurrentProduct(res.data)
            })
    }, []);


    const handleIncreaseQuantity = () => {
        let updateQuantity = quantity + 1;
        setQuantity(updateQuantity);
    }

    const handleDecreaseQuantity = () => {
        let updateQuantity = quantity - 1;
        if (updateQuantity <= 0) {
            setQuantity(0);
        }
        else {
            setQuantity(updateQuantity);
        }
    }

    const buyProductInProductDetail = (status) => {
        let productFound = {
            id: currentProduct.id,
            quantity: quantity,
            price: currentProduct.price,
            status: status
        }
        dispatch(buyProduct(productFound)).then(()=>{
            navigate('/order')
        })
    }


    return (
        <>
            <div>
                <section className="bg-light">
                    <div className="container pb-5 pb-5-4">
                        <div className="row">
                            <div className="col-lg-5 mt-5">
                                <div className="card mb-3">
                                    <img className="card-img img-fluid"
                                         src={currentProduct ? currentProduct.image : null} alt="Card image cap"
                                         id="product-detail"/>
                                </div>
                                <div className="row">
                                    <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item"
                                         data-bs-ride="carousel" style={{width: '100%'}}>
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            <div className="carousel-item active">
                                                <div className="row">

                                                    {currentProduct ? currentProduct.images.map((url) => (
                                                        <div className="col-4">
                                                            <a href="#">
                                                                <img className="card-img img-fluid" src={url}
                                                                     alt="Product Image 1"/>
                                                            </a>
                                                        </div>
                                                    )) : <></>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="h2">{currentProduct ? currentProduct.name : null}</h1>
                                        <p className="h3 py-2">{currentProduct ? currentProduct.price : null}</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <h6>Category:</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted">
                                                    <strong>{currentProduct ? currentProduct.category.name : null}</strong>
                                                </p>
                                            </li>
                                        </ul>
                                        <h6>Description:</h6>
                                        <p>{currentProduct ? currentProduct.description : null}</p>


                                        <form action method="GET">
                                            <input type="hidden" name="product-title" defaultValue="Activewear"/>
                                            <div className="row">

                                                <div className="col-auto">
                                                    <ul className="list-inline pb-3">
                                                        <li className="list-inline-item text-right">
                                                            Quantity
                                                        </li>
                                                        <li className="list-inline-item"><span
                                                            className="btn btn-success" id="btn-minus" onClick={() => {
                                                            handleDecreaseQuantity()
                                                            }}>-</span></li>
                                                        <li className="list-inline-item"><span
                                                            className="badge bg-secondary"
                                                            id="var-value">{quantity}</span></li>
                                                        <li className="list-inline-item"><span
                                                            className="btn btn-success" id="btn-plus" onClick={() => {
                                                            handleIncreaseQuantity()
                                                        }}>+</span></li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="row pb-3">
                                                <div className="col d-grid">
                                                    <button type="button" className="btn btn-success btn-lg"
                                                            name="submit" onClick={() => {
                                                        buyProductInProductDetail(true)
                                                    }}>Buy
                                                    </button>
                                                </div>
                                                <div className="col d-grid">
                                                    <button type="button" className="btn btn-success btn-lg"
                                                            name="submit" onClick={() => {
                                                        buyProductInProductDetail(false)
                                                    }}>Add To Cart
                                                    </button>
                                                </div>
                                            </div>


                                            <div className="row pb-3">
                                                <div className="col d-grid">
                                                    <button className="btn btn-success btn-lg" type={"button"}
                                                            onClick={()=>{navigate(`/shop/${currentProduct.store.id}`)}}>Go to shop ->
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}