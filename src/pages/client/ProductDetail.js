import "./detail.css"
import {Link} from "react-router-dom";
import "./clientCss/productDetail.css"


export default function ProductDetail(){

    return(
        <>
            <div>
                {/* Open Content */}
                <section className="bg-light">
                    <div className="container pb-5 pb-5-4">
                        <div className="row">
                            <div className="col-lg-5 mt-5">
                                <div className="card mb-3">
                                    <img className="card-img img-fluid" src="assets/img/product_single_10.jpg" alt="Card image cap" id="product-detail" />
                                </div>
                                <div className="row">
                                    {/*Start Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                            <i className="text-dark fas fa-chevron-left" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                    {/*Start Carousel Wrapper*/}
                                    <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                        {/*Start Slides*/}
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            {/*First slide*/}
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_01.jpg" alt="Product Image 1" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_02.jpg" alt="Product Image 2" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_03.jpg" alt="Product Image 3" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/.First slide*/}
                                            {/*Second slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_04.jpg" alt="Product Image 4" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_05.jpg" alt="Product Image 5" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_06.jpg" alt="Product Image 6" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/.Second slide*/}
                                            {/*Third slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_07.jpg" alt="Product Image 7" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_08.jpg" alt="Product Image 8" />
                                                        </a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="#">
                                                            <img className="card-img img-fluid" src="assets/img/product_single_09.jpg" alt="Product Image 9" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*/.Third slide*/}
                                        </div>
                                        {/*End Slides*/}
                                    </div>
                                    {/*End Carousel Wrapper*/}
                                    {/*Start Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a href="#multi-item-example" role="button" data-bs-slide="next">
                                            <i className="text-dark fas fa-chevron-right" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                </div>
                            </div>
                            {/* col end */}
                            <div className="col-lg-7 mt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="h2">Active Wear</h1>
                                        <p className="h3 py-2">$25.00</p>
                                        <p className="py-2">
                                            <i className="fa fa-star text-warning" />
                                            <i className="fa fa-star text-warning" />
                                            <i className="fa fa-star text-warning" />
                                            <i className="fa fa-star text-warning" />
                                            <i className="fa fa-star text-secondary" />
                                            <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                        </p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <h6>Brand:</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted"><strong>Easy Wear</strong></p>
                                            </li>
                                        </ul>
                                        <h6>Description:</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <h6>Avaliable Color :</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted"><strong>White / Black</strong></p>
                                            </li>
                                        </ul>
                                        <h6>Specification:</h6>
                                        <ul className="list-unstyled pb-3">
                                            <li>Lorem ipsum dolor sit</li>
                                            <li>Amet, consectetur</li>
                                        </ul>
                                        <form action method="GET">
                                            <input type="hidden" name="product-title" defaultValue="Activewear" />
                                            <div className="row">
                                                <div className="col-auto">
                                                    <ul className="list-inline pb-3">
                                                        <li className="list-inline-item">Size :
                                                            <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                                                        </li>
                                                        <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                                        <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                                        <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                                        <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                                    </ul>
                                                </div>
                                                <div className="col-auto">
                                                    <ul className="list-inline pb-3">
                                                        <li className="list-inline-item text-right">
                                                            Quantity
                                                            <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                                                        </li>
                                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                        <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row pb-3">
                                                <div className="col d-grid">
                                                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                                </div>
                                                <div className="col d-grid">
                                                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Close Content */}
                <section className="bg-light">
                    <div className="container pb-5 pb-5-4">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row card-body-1">
                                            <div className="col-lg-5 table-detail d-flex">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
                                                    className="img-fluid rounded-circle imag-size"
                                                    alt="Townhouses and Skyscrapers"
                                                />
                                                <Link type="button" to={"/shop/"+1} className="btn btn-success">Go shop</Link>
                                            </div>
                                            <div className="col-lg-7 ">
                                                <p>Mô tả về shop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light">
                    <div className="container pb-5 pb-5-4">
                        <div className="row">

                            {/* col end */}
                            <div className="col-lg-12 ">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="container py-3">
                                            <div className="row text-center py-3">
                                                <div className="col-lg-6 m-auto">
                                                    <h1 className="h1">More items to explore</h1>
                                                    <p>

                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-3 mb-4">
                                                    <div className="card h-100 card-1">
                                                        <Link className="nav-link" to={'/detail'}>
                                                            <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="..." />
                                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                                <ul className="list-unstyled div-content-2">
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
                                                                    <i className="text-warning fa fa-star" />
                                                                    <i className="text-warning fa fa-star" />
                                                                    <i className="text-warning fa fa-star" />
                                                                    <i className="text-muted fa fa-star" />
                                                                    <i className="text-muted fa fa-star" />
                                                                </li>
                                                                <li className="text-muted text-right">$240.00</li>
                                                            </ul>
                                                            <p className="card-text">
                                                                Lorem ipsum dolor sit amet
                                                            </p>
                                                            <p className="text-muted">bought (24)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}