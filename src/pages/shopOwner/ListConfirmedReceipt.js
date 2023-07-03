import {useEffect, useState} from "react";
import customAPI from "../../service/customAPI";


export default function ListConfirmedReceipt() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [orderDetails,setOrderDetails] = useState([])

    useEffect(() => {
        customAPI().get(`order-detail/confirmed-receipt/${user.idStore}`).then((data)=> {
            setOrderDetails(data.data)
            })
    }, [])
    console.log(orderDetails,11)
    return (
        <>
            <div className={"row"}>
                <h1 style={{textAlign: "center", color: "#59ab6e"}}>List Of Confirmed Receipt</h1>
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
                                    <p>Quantity</p>
                                    <p style={{marginLeft: "10px"}}>x{item.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-2"}>
                            <h5>{item.totalPrice}</h5>
                            <p>Price</p>
                        </div>
                        <div className={"col-2"}>
                            <h5>{item.statusBill}</h5>
                            <p>Status</p>
                        </div>
                        <div className={"col-2"}>
                            <h5>Fast Shipping</h5>
                            <p>Express</p>
                        </div>
                        <div className={"col-2"}>
                        </div>
                    </div>
                </div>
            )): <p style={{textAlign:"center"}}>You don't have any confirmed receipt</p>}
        </>
    )
}