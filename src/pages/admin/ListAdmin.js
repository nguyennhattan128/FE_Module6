import './ListAdmin.css'
export default function ListAdmin() {
    return (
        <>
            <div className="row mt-3">
                <div className="col-3">
                    <div className="item-admin1">
                        <div className="row">
                            <div className="col-8 p-2">
                                <h2>150</h2>
                                <h6>New orders</h6>
                            </div>
                            <div className="col-4 pt-3">
                                <img src="img/img1.png" style={{width: '60px', height:"60px"}} alt=""/>
                            </div>
                            <div className="col-12 d-flex text-center">
                                <div className="more">More info</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="item-admin2">
                        <div className="row">
                            <div className="col-8 p-2">
                                <h2>53%</h2>
                                <h6>Bounce Rate</h6>
                            </div>
                            <div className="col-4 pt-3">
                                <img src="img/img2.png" style={{width: '40px', height:"40px"}} alt=""/>
                            </div>
                            <div className="col-12 d-flex text-center">
                                <div className="more">More info</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="item-admin3">
                        <div className="row">
                            <div className="col-8 p-2">
                                <h2>44</h2>
                                <h6>User Registration</h6>
                            </div>
                            <div className="col-4 pt-3">
                                <img src="img/img3.png" style={{width: '50px', height:"50px"}} alt=""/>
                            </div>
                            <div className="col-12 d-flex text-center">
                                <div className="more" style={{paddingTop: "50px"}}>More info</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="item-admin4">
                        <div className="row">
                            <div className="col-8 p-2">
                                <h2>65</h2>
                                <h6>Unique Visitors</h6>
                            </div>
                            <div className="col-4 pt-3">
                                <img src="img/img4.png" style={{width: '50px', height:"50px"}} alt=""/>
                            </div>
                            <div className="col-12 d-flex text-center">
                                <div className="more">More info</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}