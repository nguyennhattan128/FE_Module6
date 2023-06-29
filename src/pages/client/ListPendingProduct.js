import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetailPending, getOrderDetailStatusTrue} from "../../service/order/orderService";
import {useNavigate} from "react-router-dom";


export default function ListPendingProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderDetails = useSelector(({order}) => {
        return order.orderDetailPending
    });
    useEffect(() => {
        dispatch(getOrderDetailPending())
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
                                    }}>Pending Products...</i>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-xl-8">
                                </div>
                                <div className="col-xl-4">
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
                                        <th scope="col">Status</th>
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
                                            <td>{item.statusBill}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                </div>
                                <div className="col-xl-3">
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xl-10">
                                </div>
                                <div className="col-xl-2">
                                    <button type="button" className="btn btn-primary text-capitalize"
                                            onClick={() => {navigate('/')}}
                                            style={{
                                                backgroundColor: '#59ab6e',
                                                border: 'none'
                                            }} >Continue Shopping
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