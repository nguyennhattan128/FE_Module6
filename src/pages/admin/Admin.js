import "./admin.css"

export default function Admin(){
    return(
        <>
            <div id="container">

                <div id="menu">
                    <ul>
                        <li><a href="src/components/adminComponent#"><i className="fa-solid fa-user"></i> Admin</a></li>
                        <li>
                            <div className={'d-flex'}>
                                <img src="./img/brand_04.png" alt="" className={'img-admin'}/>
                                <a href="src/components/adminComponent#">Nguyễn Văn Nam</a>
                            </div>
                        </li>
                        <li><a href="src/components/adminComponent#"><i className="fa-solid fa-house"></i> Trang chủ</a></li>
                        <li><a href="src/components/adminComponent#"><i className="fa-solid fa-list-check"></i> Quản lý sản phẩm </a>
                            <ul className="sub-menu">
                                <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Danh sách</a></li>
                                <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Thêm mới</a></li>
                                <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Thể loại sản phẩm</a></li>
                            </ul>
                        </li>
                        <li><a href="src/components/adminComponent#"><i className="fa-solid fa-layer-group"></i> Quản lý đơn hàng</a></li>
                        <li><a href="src/components/adminComponent#"><i className="fa-solid fa-users"></i> Quản lý người dùng</a>
                            <ul className="sub-menu">
                                <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Danh sách người dùng</a></li>
                                <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Thêm mới</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div id="content">
                    <div id="header">
                        <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                        <div className={'button-nav'}><a href="src/components/adminComponent#" >Trang chủ</a></div>
                        <div className={'button-nav'} ><a href="src/components/adminComponent#" >Đăng xuất</a></div>
                        <div className={'button-nav search'}><i className="fa-solid fa-magnifying-glass"></i></div>
                    </div>

                    <div className="action">
                        <a className={'main-home'}>Trang chủ</a>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="item1">
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
                            <div className="item2">
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
                            <div className="item3">
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
                            <div className="item4">
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

                    <div id="footer">
                        <p>Copyright &copy; 2023 TMDT</p>
                    </div>
                </div>

            </div>
        </>
    )
}