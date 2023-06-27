



export default function Category(){

    return(
        <>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Come visit the beloved store!</h1>
                        <p>
                            These are the shops that have sold the most products recently.
                            Would you like to visit the store and take a look?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3 p-5 mt-3">
                        <a href="module_6/src/components/clientComponent#"><img src="./assets/img/category_img_01.jpg" className="rounded-circle img-fluid border" /></a>
                        <h5 className="text-center mt-3 mb-3">Watches</h5>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-3 p-5 mt-3">
                        <a href="module_6/src/components/clientComponent#"><img src="./assets/img/category_img_02.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-3 p-5 mt-3">
                        <a href="module_6/src/components/clientComponent#"><img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                    <div className="col-12 col-md-3 p-5 mt-3">
                        <a href="module_6/src/components/clientComponent#"><img src="./assets/img/category_img_03.jpg" className="rounded-circle img-fluid border" /></a>
                        <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
                        <p className="text-center"><a className="btn btn-success">Go Shop</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}