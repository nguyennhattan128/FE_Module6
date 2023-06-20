

export default function Sidebar(){

    return(
        <>
            <div id="menu">
                <ul>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-user"></i> Staff</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img src="./img/brand_04.png" alt="" className={'img-admin'}/>
                            <a href="src/components/adminComponent#">Dương Văn Dài</a>
                        </div>
                    </li>
                    <li><a href="/staff"><i className="fa-solid fa-house"></i> Trang chủ</a></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-pen"></i> Thông tin cá nhân</a></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-list-check"></i> Quản lý sản phẩm </a>

                        <ul className="sub-menu">
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Danh sách</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Thêm mới</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Thể loại sản phẩm</a></li>
                        </ul>
                    </li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-layer-group"></i> Quản lý đơn hàng</a></li>
                </ul>
            </div>
        </>
    )
}