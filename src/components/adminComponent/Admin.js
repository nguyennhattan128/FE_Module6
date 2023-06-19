import "../admincss/admin.css"

export default function Admin(){
    return(
        <>
            <div id="container">

                <div id="menu">
                    <ul>
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">Nguyễn Văn Nam</a></li>
                        <li><a href="#">Trang chủ</a></li>
                        <li>
                            <a href="#">Quản lý sản phẩm </a>
                            <ul className="sub-menu">
                                <li><a href="#">Danh sách</a></li>
                                <li><a href="#">Thêm mới</a></li>
                                <li><a href="#">Thể loại sản phẩm</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Quản lý đơn hàng</a></li>
                        <li><a href="#">Quản lý người dùng</a></li>
                    </ul>
                </div>

                <div id="content">
                    <div id="header">
                        <div  className={'button-nav logo'} >#</div>
                        <div className={'button-nav'}><a href="#" >Trang chủ</a></div>
                        <div className={'button-nav'} ><a href="#" >Đăng xuất</a></div>
                        <div className={'button-nav search'}>Tìm kiếm</div>
                    </div>

                    <div className="action">
                        <a className={'main-home'}>Trang chủ</a>
                        <a className={'link-main'} href="#">Trang chủ</a>
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
                                        <img src="img/OIP.jpg" style={{width: '100%'}} alt=""/>
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
                                        <img src="img/OIP_1.jpg" style={{width: '100%'}} alt=""/>
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
                                        <img src="img/img.png" style={{width: '100%'}} alt=""/>
                                    </div>
                                    <div className="col-12 d-flex text-center">
                                        <div className="more">More info</div>
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
                                        <img src="img/image3.jpg" style={{width: '100%'}} alt=""/>
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