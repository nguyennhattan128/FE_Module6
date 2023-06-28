import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetails,} from "../../service/order/orderService";
import {Link} from "react-router-dom";
import './Order.css'
import {boolean} from "yup";

export default function Order(){

    const dispatch = useDispatch();

    const orderDetails = useSelector(({order}) => {
        return order.orderDetails
    })
    const changeQuantity = (id,price,status,quantity) => {
        let product = {
            id: id,
            price:price,
            status:status,
            quantity: quantity
        }
        dispatch()
    };
    const handleChange = (id) => {
        dispatch()
    }


   useEffect(() => {
       dispatch(getOrderDetails())
   },[])



    return(
        <>{orderDetails ? (
            <section className="h-100 h-custom" style={{backgroundColor: '#7ac98f'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{orderDetails ? (orderDetails.length === 1 ? '1 item' : `${orderDetails.length} items`) : 0}
                                                    </h6>
                                                </div>
                                                <hr className="my-4"/>
                                                {orderDetails && orderDetails.map((item)=>(
                                                    <div key={item.id}>
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-1 col-lg-1 col-xl-1">
                                                                <input type="checkbox" checked={true} onChange={(e)=>{handleChange(item.id)}}/>
                                                            </div>
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={item.product.image}
                                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3" style={{
                                                                width: 100
                                                            }}>
                                                                <h6 className="text-muted">{item.product.category.name}</h6>
                                                                <h6 className="text-black mb-0">{item.product.name ? item.product.name:null}</h6>
                                                            </div>

                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex" >
                                                                <button className="btn btn-link px-2" onClick={() => {changeQuantity(item.product.id,item.price,item.status,-1)}}>
                                                                    <i className="fas fa-minus"/>
                                                                </button>
                                                                <input name="quantity"
                                                                       value={item.quantity}
                                                                       onChange = {(e)=> {}}
                                                                       type="number" className="form-control form-control-sm" style={{
                                                                    width: 60,
                                                                    textAlign: "center",
                                                                    marginLeft: 5,
                                                                    marginRight: 5,
                                                                    marginBottom: 0
                                                                }}></input>
                                                                <button className="btn btn-link px-2"  onClick={() => {changeQuantity(item.product.id,item.price,item.status,1)}}>
                                                                    <i className="fas fa-plus"/>
                                                                </button>
                                                            </div>

                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
                                                            style={{
                                                                width: 100,
                                                            }}
                                                             >
                                                                <h6 className="mb-0">{item.product.price}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
                                                                 style={{
                                                                     width: 100,
                                                                 }}>
                                                                <h6 className="mb-0">€ {item.product.price * item.quantity}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a  className="text-muted"><i
                                                                    className="fas fa-times"/></a>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4"/>
                                                    </div>
                                                ))}
                                                <div className="pt-5">
                                                    <h6 className="mb-0"><Link to={'/'} className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"/>Back to shop</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4"/>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">{orderDetails ? (orderDetails.length === 1 ? 'Item 1' : `Items ${orderDetails.length} `) : 0}</h5>
                                                    <h5>€ </h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Shipping</h5>
                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                        <option value={4}>Four</option>
                                                    </select>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Examplea2"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Examplea2">Enter
                                                            your code</label>
                                                    </div>
                                                </div>
                                                <hr className="my-4"/>
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>€ {orderDetails.totalMoney}</h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg"
                                                        data-mdb-ripple-color="dark">Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ):<></>}
        </>
    )
}