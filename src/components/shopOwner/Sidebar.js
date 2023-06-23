import {Link} from "react-router-dom";


export default function Sidebar(){

    return(
        <>
            <div id="menu">
                <ul>
                    <li>
                        <div className={'d-flex'}>
                            <img src="./img/brand_04.png" alt="" className={'img-admin'}/>
                            <a href="src/components/adminComponent#">Dai Văn Giường</a>
                        </div>
                    </li>
                    <li><a><i className="fa-solid fa-user"></i> Shop Owner</a></li>
                    <li><Link to="/"><i className="fa-solid fa-house"></i> Main</Link></li>
                    <li><Link to={"/shop-owner/edit-shop"}><i className="fa-solid fa-pen"></i>  Shop Information</Link></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-list-check"></i> Product Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/shop-owner/show-product"}><i className="fa-solid fa-check"></i> Product List</Link></li>
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