import {Link} from "react-router-dom";


export default function Sidebar(){

    return(
        <>
            <div id="menu">
                <ul>
                    <li>
                        <div className={'d-flex'}>
                            <img style={{borderRadius:"50%"}} src="https://th.bing.com/th/id/OIP.XTwQxTeTOffeUV2k9_hr5AHaEo?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className={'img-admin'}/>
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