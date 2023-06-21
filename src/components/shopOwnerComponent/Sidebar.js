

export default function Sidebar(){

    return(
        <>
            <div id="menu">
                <ul>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-user"></i> Shop Owner</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img src="./img/brand_04.png" alt="" className={'img-admin'}/>
                            <a href="src/components/adminComponent#">Dai Văn Giường</a>
                        </div>
                    </li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-house"></i> Main</a></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-list-check"></i> Product Management</a>
                        <ul className="sub-menu">
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Product List</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Add Product</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Kind Of Product</a></li>
                        </ul>
                    </li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-layer-group"></i> Receipt Management</a></li>
                </ul>
            </div>
        </>
    )
}