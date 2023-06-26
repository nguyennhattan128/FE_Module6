import './clientCss/ListProduct.css';
import {Link} from "react-router-dom";

export default function ListProduct(){

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
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card h-100">
                                <Link className="nav-link" to={'/detail'}>
                                    <a href="shop-single.html">
                                        <img src="./assets/img/feature_prod_03.jpg" className="card-img-top" alt="..." />
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
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$360.00</li>
                                    </ul>
                                    <p className="card-text">
                                        Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                                    </p>
                                    <p className="text-muted">bought (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}