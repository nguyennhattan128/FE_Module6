import {useEffect, useState} from "react";
import {getStoreTypes} from "../../service/store/storeTypeService";
import {useDispatch, useSelector} from "react-redux";
import {getOrder} from "../../service/order/orderService";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";


export default function Order(){

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [fetchOrder, setFetchOrder] = useState(false)


    const currentOrder = useSelector(({ order }) => {
        if (fetchOrder) {
            if (order.currentOrder && order.currentOrder.orderDetails.length === 0) {
                Swal.fire({
                    title: "Your shopping cart is empty, go back to continue shopping",
                    confirmButtonColor: "green",
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                }).then(()=>{
                    navigate('/')
                });
            }
            return order.currentOrder;
        }
        return {};
    });




    useEffect(() => {
        dispatch(getOrder()).then(() => {
            setFetchOrder(true)
        })
    }, [])



    return(
        <>{currentOrder && currentOrder.orderDetails?(
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
                                                    <h6 className="mb-0 text-muted">{currentOrder.orderDetails ? (currentOrder.orderDetails.length === 1 ? '1 item' : `${currentOrder.orderDetails.length} items`) : 0}
                                                    </h6>
                                                </div>
                                                <hr className="my-4"/>


                                                {currentOrder && currentOrder.orderDetails && currentOrder.orderDetails.map((item)=>(
                                                    <>
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={item.product.image}
                                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3" style={{
                                                                width: 100
                                                            }}>
                                                                <h6 className="text-muted"></h6>
                                                                <h6 className="text-black mb-0">{item.product.name}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex" style={{
                                                                width: 85,
                                                            }}>
                                                                <input id="form1" min={0} name="quantity" defaultValue={1}
                                                                       type="number" className="form-control form-control-sm"/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
                                                            >
                                                                <h6 className="mb-0">{item.product.price}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">€ {item.totalPrice}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="src/components/userComponent#!" className="text-muted"><i
                                                                    className="fas fa-times"/></a>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4"/>
                                                    </>
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
                                                    <h5 className="text-uppercase">{currentOrder.orderDetails ? (currentOrder.orderDetails.length === 1 ? 'Item 1' : `Items ${currentOrder.orderDetails.length} `) : 0}</h5>
                                                    <h5>€ {currentOrder.totalMoney}</h5>
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
                                                    <h5>€ {currentOrder.totalMoney}</h5>
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