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
                        <h1>Trang chủ</h1>
                        <a href="#">Trang chủ</a>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="item">
                                <div className="row">
                                    <div className="col-8 p-2">
                                        <h2>150</h2>
                                        <h4>New orders</h4>
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
                            <h2>Bounce Rate</h2>
                            <img width="120px" height="90px" src="img/OIP_1.jpg" alt="" />
                        </div>
                        <div className="col-3">
                            <h2>Unique Visitors</h2>
                            <img width="120px" height="90px" src="img/OIP_2.png" alt="" />
                        </div>
                        <div className="col-3">
                            <h2>Unique Visitors</h2>
                            <img width="120px" height="90px" src="img/OIP_2.png" alt="" />
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