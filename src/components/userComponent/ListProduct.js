import './ListProduct.css';

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
                                <a href="shop-single.html">
                                    <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$240.00</li>
                                    </ul>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>
                                    <p className="text-muted">bought (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img src="./assets/img/feature_prod_02.jpg" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$480.00</li>
                                    </ul>
                                    <p className="card-text">
                                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                    </p>
                                    <p className="text-muted">bought (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img src="./assets/img/feature_prod_03.jpg" className="card-img-top" alt="..." />
                                </a>
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
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card h-100">
                                <a href="shop-single.html">
                                    <img src="./assets/img/feature_prod_03.jpg" className="card-img-top" alt="..." />
                                </a>
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