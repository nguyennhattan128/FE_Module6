import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeOrderDetailQuantity, changeOrderDetailQuantityByInput,
    deleteOrderDetail,
    getOrder,
} from "../../service/order/orderService";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
import './Order.css'


export default function Order(){

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [fetchOrder, setFetchOrder] = useState(false);
    const [listOrderDetails, setListOrderDetails] = useState([]);


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


    useEffect(() => {
        if (currentOrder && currentOrder.orderDetails) {
            setListOrderDetails(currentOrder.orderDetails);
        }
    }, [currentOrder]);



    const handleIncreaseQuantity = (orderId, orderDetailId, productId) =>{
        let updateOrderDetails = listOrderDetails.map((orderDetail)=>{
            if(orderDetail.id === orderDetailId){
                let newQuantity = parseInt(orderDetail.quantity) + 1;
                dispatch(changeOrderDetailQuantity({
                    orderId: orderId,
                    orderDetailId: orderDetailId,
                    quantity: newQuantity,
                    price: orderDetail.price,
                    productId: productId
                }))
                return {...orderDetail, quantity: newQuantity};
            }
            return orderDetail
        })
        setListOrderDetails(updateOrderDetails);
    }

    const handleDecreaseQuantity = (orderId , orderDetailId, productId) =>{
        let updateOrderDetails = listOrderDetails.map((orderDetail)=>{
            if(orderDetail.id === orderDetailId){
                if(orderDetail.quantity < 2 ){
                    handleDeleteOrderDetail(orderDetailId, productId)
                }if(orderDetail.quantity < 1){
                    return {...orderDetail, quantity: 0}
                }
                let newQuantity = parseInt(orderDetail.quantity) - 1
                dispatch(changeOrderDetailQuantity({
                    orderId: orderId,
                    orderDetailId: orderDetailId,
                    quantity: newQuantity,
                    price: orderDetail.price,
                    productId: productId
                }))
                return {...orderDetail, quantity: newQuantity}
            }

            return orderDetail
        })
        setListOrderDetails(updateOrderDetails);
    }


    const handleChangeInputQuantity = (e, orderId, orderDetailId, productId) =>{
        let updateOrderDetails = listOrderDetails.map((orderDetail)=>{
            let updateQuantity = e.target.value
            if(orderDetail.id === orderDetailId) {
                if (updateQuantity <= 1) {
                    updateQuantity = 1
                    dispatch(changeOrderDetailQuantityByInput(
                        {
                            orderId: orderId,
                            orderDetailId: orderDetailId,
                            quantity: updateQuantity,
                            price: orderDetail.price,
                            productId: productId
                        }
                    ))
                }
                dispatch(changeOrderDetailQuantityByInput(
                    {
                        orderId: orderId,
                        orderDetailId: orderDetailId,
                        quantity: updateQuantity,
                        price: orderDetail.price,
                        productId: productId
                    }
                ))
                return {...orderDetail, quantity: updateQuantity};
            }
            return orderDetail;
        })
        setListOrderDetails(updateOrderDetails);
    }


    const handleDeleteOrderDetail = (orderDetailId, productId) =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-md custom-confirm-button',
                cancelButton: 'btn btn-danger btn-md'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'This item has been removed from your cart',
                    'success'
                ).then(()=>{
                    dispatch(deleteOrderDetail({
                        orderDetailId: orderDetailId,
                        productId: productId
                    }))
                })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'This item is still in your cart :)',
                    'error'
                )
            }
        })
    }







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


                                                {currentOrder && listOrderDetails && listOrderDetails.map((item)=>(
                                                    <div key={item.id}>
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-1 col-lg-1 col-xl-1">
                                                                <input type="checkbox"/>
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
                                                                <h6 className="text-black mb-0">{item.product.name}</h6>
                                                            </div>

                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex" >
                                                                <button className="btn btn-link px-2"
                                                                        onClick={()=>{handleDecreaseQuantity(currentOrder.id, item.id, item.product.id)}}>
                                                                    <i className="fas fa-minus"/>
                                                                </button>
                                                                <input name="quantity"
                                                                       // value = {listOrderDetails.find(orderDetail =>orderDetail.id === item.id)?.quantity || ''}
                                                                       value={item.quantity}
                                                                       onChange = {(e)=>{handleChangeInputQuantity(e, currentOrder.id, item.id, item.product.id)}}
                                                                       type="number" className="form-control form-control-sm" style={{
                                                                    width: 60,
                                                                    textAlign: "center",
                                                                    marginLeft: 5,
                                                                    marginRight: 5,
                                                                    marginBottom: 0
                                                                }}></input>
                                                                <button className="btn btn-link px-2" onClick={()=>{handleIncreaseQuantity(currentOrder.id, item.id, item.product.id)}}
                                                                       >
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
                                                                <a  className="text-muted"  onClick={()=>{
                                                                   handleDeleteOrderDetail(item.id, item.product.id)
                                                                }}><i
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
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>€ {currentOrder.totalMoney}</h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg"
                                                        data-mdb-ripple-color="dark">Proceed Pay
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