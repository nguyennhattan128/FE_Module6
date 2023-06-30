import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getOrderDetailPendingReceipt,
    updateOrderDetailPendingReceipt
} from "../../service/order/orderService";

export default function ListPendingReceipt() {
    const user = JSON.parse(localStorage.getItem("user"));
    const orderDetails = useSelector(({order}) => {
        return order.orderDetailPendingReceipt
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderDetailPendingReceipt(user.idStore))
    }, [])

    return (
        <>
            <div className={"row"}>
                <h1 style={{textAlign: "center", color: "#59ab6e"}}>Please confirm these pending receipts!</h1>
            </div>
            {orderDetails.length > 0 ? orderDetails.map((item) => (
                <div>
                    <div className={"row"}>
                        <div className={"col-4"}>
                            <div style={{display: "flex"}}>
                                <h5>{item.order.user.username}</h5>
                                <i style={{margin: "3px 0 0 10px"}} className="fa-regular fa-comment"></i>
                            </div>
                        </div>
                        <div className={"col-2"}></div>
                        <div className={"col-2"}></div>
                        <div className={"col-2"}></div>
                        <div className={"col-2"}>
                            <p>Receipt Code: #100{item.order.id}</p>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-4" style={{display: "flex", alignItems: "center"}}>
                            <img style={{width: "100px", marginRight: "10px"}}
                                 src={item.product.image}
                                 alt=""/>
                            <div>
                                <h5>{item.product.name}</h5>
                                <div style={{display: "flex"}}>
                                    <p>The loai</p>
                                    <p style={{marginLeft: "10px"}}>x1</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-2"}>
                            <h5>{item.price}</h5>
                            <p>Ghi chu</p>
                        </div>
                        <div className={"col-2"}>
                            <h5>{item.statusBill}</h5>
                            <p>Chu thich</p>
                        </div>
                        <div className={"col-2"}>
                            <h5>Giao nhanh</h5>
                            <p>Chu thich</p>
                        </div>
                        <div className={"col-2"}>
                            <i className="fa-solid fa-hand-point-right"></i>
                            <button style={{marginLeft: 10}} className="btn btn-secondary"
                                    onClick={() => {
                                        dispatch(updateOrderDetailPendingReceipt({
                                            orderDetail: item.id
                                        }))
                                            .then(() => {
                                                dispatch(getOrderDetailPendingReceipt(user.idStore))
                                            })
                                    }}> Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )) : <p style={{textAlign: "center"}}>You don't have any pending receipt</p>}
        </>
    )
}