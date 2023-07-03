import "./clientCss/viewShop.css"
import {useState,useEffect,} from "react";
import {useSelector,useDispatch} from "react-redux";
import {productInShop} from "../../service/product/ProductService";
import Pagination from "../../pagination/Pagination";
import {Link, useParams} from "react-router-dom";

export default function ViewShop(){
    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
    })
    const dispatch = useDispatch();
    const param = useParams()
    const idStore = param.idStore

    const[filters,setFilters] = useState({
        page: 1,
        page_size: 4
    })
    const idUser = JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).idUser : undefined
    const listProducts = useSelector(({product}) => {
        return product.listProduct1
    })

    const product = listProducts[0];
    const store = product ? product.store : null;

    const total = useSelector(({product}) => {
        return product.total
    })
    const handlePageChange = (currentPage) => {
        window.scroll({
            top: 350,
            left: 100,
            behavior: "smooth",
        });
        setFilters({
            ...filters,
            page: currentPage
        })
    }

    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
        dispatch(productInShop({filters,idStore}))
    },[page_size,page])

    return(
        <>
            <div className="container py-5">
                {store &&
                    <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src= {store.avatar}
                                         className="img-fluid rounded-3" style={{height: "150px"}} alt="Cotton T-shirt"/>
                                </div>
                                <div className="col-md-5 ">
                                    <p className="fs-5"><i className="fa-regular fa-user me-3"></i>Shop name: {store.name}</p>
                                    <p className="fs-5"><i className="fa-solid fa-phone me-3"></i>Telephone: {store.telephone}</p>
                                    <p className="fs-5"><i className="fa-regular fa-envelope me-3"></i>Email: {store.email}</p>
                                </div>
                                <div className="col-md-5 ">
                                    <p className="fs-5"><i className="fa-regular fa-address-book me-3"></i>Address: {store.address}</p>
                                    <p className="fs-5"><i className="fa-brands fa-product-hunt me-3"></i>Product: {total}</p>
                                    <p className="fs-5"><i className="fa-regular fa-star me-3"></i>Rate: <i className="text-warning fa fa-star" />
                                        <i className="text-warning fa fa-star" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="row ">
                    <div className="col-lg-2">
                        <div className={"d-flex align-items-center "}>
                            <i className="fa-solid fa-bars"></i>
                            <h2 className="px-2 shop-sidebar">Categories</h2>
                        </div>
                    </div>
                    <div className="col-lg-10 mt-4">

                        <div className="row">
                                <div className="col-md-8 pb-4">
                                    <button type="button" className="btn btn-success shop-btn ms-3">Latest</button>
                                    <button type="button" className="btn btn-success shop-btn">Best seller</button>
                                </div>
                                <div className="col-md-4 pb-4">
                                    <div className="d-flex">
                                        <input type="text" className="form-control" id="inputMobileSearch"
                                               placeholder="Search ..."/>
                                        <button className="btn-icon" type="submit"><i
                                            className="fa fa-fw fa-search text-dark mr-2"/></button>
                                    </div>
                                </div>
                                <div/>
                            </div>

                        <div className="row">
                            {/*product*/}
                            {listProducts.map((item) =>
                                <div className="col-12 col-md-3 mb-4 card-hover" key={item.id}>
                                    <div className="card h-100">
                                        <Link className="nav-link" to={'/detail/'+item.id}>
                                            <img src={item.image} className="card-img-top card-size" alt="..." />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled div-content">
                                                <span>
                                                    <li><Link className="btn btn-success text-white" to={"/shop/"+item.store.id}><i
                                                        className="fa-solid fa-shop"></i></Link></li>
                                                <li><Link to={'/detail/'+item.id} className="btn btn-success text-white mt-2"
                                                       ><i className="far fa-eye"></i></Link>
                                                </li>
                                                <li><Link className="btn btn-success text-white mt-2"
                                                          to={'/order/'}><i className="fas fa-cart-plus"></i></Link>
                                                </li>
                                                </span>
                                                </ul>
                                            </div>
                                        </Link>

                                        <div className="card-body" style={{fontSize:"15px !important"}}>
                                            <ul className="list-unstyled d-flex justify-content-between ul-div ">
                                                <li style={{fontSize:"15px !important"}}>
                                                    Quantities: {item.quantity}
                                                </li>
                                                <li className="" >Price: {item.price}</li>
                                            </ul>
                                            <p className="card-text shop-text" >
                                                {item.description}
                                            </p>
                                            <p className="text-muted">
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <div className={"pagination"}>
                <Pagination page={page} page_size={page_size} total={total} onPageChange={handlePageChange} />
            </div>

        </>
    )
}