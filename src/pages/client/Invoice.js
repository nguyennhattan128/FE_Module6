import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetailStatusTrue} from "../../service/order/orderService";
import {useNavigate} from "react-router-dom";
import customAPI from "../../service/customAPI";


export default function Invoice() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const orderDetails = useSelector(({order}) => {
        return order.orderDetailStatusTrue
    });
    let total = 0;

    useEffect(() => {
        dispatch(getOrderDetailStatusTrue())
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <i className="fab fa fa-4x ms-0" style={{
                                        color: '#59ab6e',
                                        fontSize: "30px",
                                        fontFamily: "arial",
                                        marginBottom: "30px"
                                    }}>Thank you for your order!</i>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-xl-8">
                                    <ul className="list-unstyled">
                                        <li className="text-muted">To: <span
                                            style={{color: '#59ab6e'}}>{user.username}</span>
                                        </li>
                                        <li className="text-muted">{user.address}</li>
                                        <li className="text-muted"><i className="fas fa-phone"></i>{user.phoneNumber}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-4">
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="fas fa-circle"
                                                                      style={{color: '#59ab6e'}}></i> <span
                                            className="fw-bold">ID:</span>#{orderDetails[0] ? orderDetails[0].order.id : null}
                                        </li>
                                        <li className="text-muted"><i className="fas fa-circle"
                                                                      style={{color: '#59ab6e'}}></i> <span
                                            className="fw-bold">Creation Date: </span>{orderDetails[0] ? orderDetails[0].order.date.toString().slice(0, 10) : null}
                                        </li>
                                        <li className="text-muted"><i className="fas fa-circle"
                                                                      style={{color: '#59ab6e'}}></i> <span
                                            className="me-1 fw-bold"></span>
                                            <span
                                                className="badge bg-warning text-black fw-bold">{orderDetails[0] ? orderDetails[0].order.status : null}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row my-2 mx-1 justify-content-center">
                                <table className="table table-striped table-borderless">
                                    <thead style={{backgroundColor: '#59ab6e'}} className="text-white">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orderDetails && orderDetails.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.product.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.totalPrice}</td>
                                            <td style={{display: "none"}}>{total += item.totalPrice}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                </div>
                                <div className="col-xl-3">
                                    <p className="text-black float-start"><span className="text-black me-3"> Total Amount</span><span
                                        style={{fontSize: '25px'}}>{total}</span></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xl-10">
                                </div>
                                <div className="col-xl-2">
                                    <button type="button" className="btn btn-primary text-capitalize"
                                            onClick={() => {
                                                customAPI().post('order-detail/pending')
                                                    .then(res => {
                                                        console.log("POST order-detail/pending:", res)
                                                        navigate('/pending')
                                                    })
                                            }}
                                            style={{
                                                backgroundColor: '#59ab6e',
                                                border: 'none'
                                            }}>Pay Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}