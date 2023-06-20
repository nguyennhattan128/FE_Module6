export default function Header(){

    return(
        <>
            <div id="header">
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                <div className={'button-nav'}><a href="/staff" >Trang chủ</a></div>
                <div className={'button-nav'} ><a href="/" >Đăng xuất</a></div>
                <div className="d-flex button-nav search">
                    <input type="text" className="form-control" id="inputSearch" placeholder="Search ..." />
                    <button className="btn-icon" type="submit"><i className="fa fa-fw fa-search text-dark mr-2" /></button>
                </div>
            </div>
        </>
    )
}