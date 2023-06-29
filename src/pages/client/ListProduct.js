import './clientCss/ListProduct.css';
import "./clientCss/viewShop.css"
import {Link} from "react-router-dom";
import Pagination from "../../pagination/Pagination";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MainProduct, productInShop} from "../../service/product/ProductService";

export default function ListProduct(){
    const dispatch = useDispatch();
    const[filters,setFilters] = useState({
        page: 1,
        page_size: 8
    })
    const listProducts = useSelector(({product}) => {
        return product.listProduct
    })
    const total = useSelector(({product}) => {
        return product.total
    })
    const handlePageChange = (currentPage) => {
        setFilters({
            ...filters,
            page: currentPage
        })
    }
    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
        dispatch(MainProduct({filters}))
    },[page_size,page])

    return(
        <>
            <section className="bg-light">
                <div className="container py-3">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Today's Suggestions</h1>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/*product*/}
                        {listProducts.map((item) =>
                            <div className="col-12 col-md-3 mb-4 card-hover" key={item.id}>
                                <div className="card h-100">
                                    <Link className="nav-link" to={'/detail/'+item.id}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled div-content">
                                                <span>
                                                    <li><a className="btn btn-success text-white" href="shop-single.html"><i
                                                        className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2"
                                                       href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2"
                                                       href="shop-single.html"><i className="fas fa-cart-plus"></i></a>
                                                </li>
                                                </span>
                                            </ul>
                                        </div>
                                    </Link>

                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>

                                                Quantities : {item.quantity}
                                            </li>
                                            <li className="text-muted text-right">Price: {item.price}</li>
                                        </ul>
                                        <p className="card-text shop-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                        </p>
                                        <p className="text-muted">
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            bought (24)</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={"pagination"}>
                        <Pagination page={page} page_size={page_size} total={total} onPageChange={handlePageChange} />
                    </div>
                </div>
            </section>
        </>
    )
}