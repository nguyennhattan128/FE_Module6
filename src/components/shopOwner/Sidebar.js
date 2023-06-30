import {Link} from "react-router-dom";


export default function Sidebar(){
let user = JSON.parse(localStorage.getItem("user"));

    return(
        <>
            <div id="menu" style={{backgroundColor:"orange", color:"black"}}>
                <ul>
                    <li>
                        <div className={'d-flex align-items-center'}>
                            <img className={"ms-2"} style={{height:"30px",width: "30px",borderRadius:"50%"}} src={user.image}/>
                            <a>{ user.name}</a>
                        </div>
                    </li>
                    <li><a ><i className="fa-solid fa-user"></i> Shop Owner</a></li>
                    <li><Link to={"/"}><i className="fa-solid fa-house"></i> Back Home</Link></li>
                    <li><Link to={"/shop-owner/edit-shop"}><i className="fa-solid fa-pen"></i>  Shop Information</Link></li>
                    <li><a><i className="fa-solid fa-list-check"></i> Product Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/shop-owner/show-product"}><i className="fa-solid fa-check"></i> Product List</Link></li>
                            <li><Link to={"/shop-owner/add-product"}><i className="fa-solid fa-check"></i> Add Product</Link></li>
                        </ul>
                    </li>
                    <li><a><i className="fa-solid fa-layer-group"></i> Receipt Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/shop-owner/pending"}><i className="fa-solid fa-check"></i> Pending Receipt</Link></li>
                            <li><Link to={"/shop-owner/confirmed"}><i className="fa-solid fa-check"></i> Confirmed Receipt</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}