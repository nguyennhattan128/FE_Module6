import {Link} from "react-router-dom";


export default function Sidebar(){
let user = JSON.parse(localStorage.getItem("user"));

    return(
        <>
            <div id="menu">
                <ul>
                    <li>
                        <div className={'d-flex'}>
                            <img style={{borderRadius:"50%"}} src={user.image} alt="" className={'img-admin'}/>
                            <a>{user.username}</a>
                        </div>
                    </li>
                    <li><a><i className="fa-solid fa-user"></i> Shop Owner</a></li>
                    <li><Link to="/shop-owner"><i className="fa-solid fa-house"></i> Main</Link></li>
                    <li><Link to={"/shop-owner/edit-shop"}><i className="fa-solid fa-pen"></i>  Shop Information</Link></li>
                    <li><a><i className="fa-solid fa-list-check"></i> Product Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/shop-owner/show-product"}><i className="fa-solid fa-check"></i> Product List</Link></li>
                            <li><Link to={"/shop-owner/add-product"}><i className="fa-solid fa-check"></i> Add Product</Link></li>
                            <li><a><i className="fa-solid fa-check"></i> Kind Of Product</a></li>
                        </ul>
                    </li>
                    <li><a><i className="fa-solid fa-layer-group"></i> Receipt Management</a></li>
                </ul>
            </div>
        </>
    )
}