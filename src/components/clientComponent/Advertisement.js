
export default function Advertisement(){

    return(
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={0} className="active" />
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={1} />
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="./assets/img/banner_img_01.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>Zay</b> ECommerce</h1>
                                        <h3 className="h2">Shop effortlessly with Zay - your ultimate online destination.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="./assets/img/banner_img_02.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Cetaphil Body Moisturizer</h1>
                                        <h3 className="h2">Hydrating Moisturizing Cream for Dry to Very Dry, Sensitive Skin</h3>
                                        <p>
                                            Hydrate your skin with our moisturizing marvel.
                                            Experience the ultimate hydration with our premium skincare product.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">JONATHAN Y</h1>
                                        <h3 className="h2">LED Metal Task Lamp Modern,Contemporay,Transitional </h3>
                                        <p>
                                            for Bedroom, Living Room, Office, College Dorm, Coffee Table, Bookcase, Black/BrassGold
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left" />
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right" />
                </a>
            </div>
        </>
    )
}