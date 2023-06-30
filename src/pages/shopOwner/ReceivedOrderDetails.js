import './ReceivedOrderDetails.css'


function ReceivedOrderDetails() {

    return (
    <>
            <link rel="stylesheet" href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css"
                  integrity="sha384-jbCTJB16Q17718YM9U22iJkhuGbS0Gd2LjaWb4YJEZToOPmnKDjySVa323U+W7Fv"
                  crossOrigin="anonymous"/>

                <div className="container">
                    <div className="row">

                            <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane  fade  active show" id="orders" role="tabpanel"
                                         aria-labelledby="orders-tab">
                                        <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
                                        <div className="bg-white card mb-4 order-list shadow-sm">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4"
                                                             src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                             alt="Generic placeholder image"/>
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <span className="float-right text-info">Delivered on Mon, Nov 12, 7:18 PM <i
                                                                className="icofont-check-circled text-success"></i></span>
                                                        </a>
                                                        <h6 className="mb-2">
                                                            <a href="#"></a>
                                                            <a href="#" className="text-black">Gus's World Famous Fried
                                                                Chicken</a>
                                                        </h6>
                                                        <p className="text-gray mb-1"><i
                                                            className="icofont-location-arrow"></i> 730 S Mendenhall Rd,
                                                            Memphis, TN 38117, USA
                                                        </p>
                                                        <p className="text-gray mb-3"><i
                                                            className="icofont-list"></i> ORDER #25102589748 <i
                                                            className="icofont-clock-time ml-2"></i> Mon, Nov 12, 6:26
                                                            PM</p>
                                                        <p className="text-dark">Veg Masala Roll x 1, Veg Burger x 1,
                                                            Veg Penne Pasta in Red Sauce x 1
                                                        </p>
                                                        <hr/>
                                                            <div className="float-right">
                                                                <a className="btn btn-sm btn-outline-success"
                                                                   ><i
                                                                    className="icofont-headphone-alt"></i> HELP</a>
                                                                <a className="btn btn-sm btn-success" style={{border: '1px solid green'}} ><i
                                                                    className="icofont-refresh"></i> REORDER</a>
                                                            </div>
                                                            <p className="mb-0 text-black text-success pt-2"><span
                                                                className="text-black font-weight-bold"> Total Paid:</span> $300
                                                            </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        </>
    );
}

export default ReceivedOrderDetails;