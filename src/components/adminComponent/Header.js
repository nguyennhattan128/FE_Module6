export default function Header(){

    return(
        <>
            <div id="header">
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                <div className={'button-nav'}><a href="src/components/adminComponent#" >Trang chủ</a></div>
                <div className={'button-nav'} ><a href="src/components/adminComponent#" >Đăng xuất</a></div>
                <div className={'button-nav search'}><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
        </>
    )
}