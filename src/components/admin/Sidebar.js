import {Link} from "react-router-dom";


export default function Sidebar(){
    let user = JSON.parse(localStorage.getItem("user"))

    return(
        <>
            <div id="menu"style={{position:"fixed", zIndex:"1000"}}>
                <ul>
                    <li>
                        <div className={'d-flex align-items-center'}>
                            <img className={"ms-2"} style={{height:"30px",width: "30px",borderRadius:"50%"}} src={user.image}/>
                            <a>{ user.name}</a>
                        </div>
                    </li>
                    <li><a><i className="fa-solid fa-user"></i> Admin</a></li>
                    <li><Link to={"/"}><i className="fa-solid fa-house"></i> Back Home</Link></li>
                    <li><a><i className="fa-solid fa-users"></i> Staff Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/admin/all-staff"}><i className="fa-solid fa-check"></i> Staff List</Link></li>
                            <li><Link to={"/admin/add-staff"}><i className="fa-solid fa-check"></i> Add Staff</Link></li>
                        </ul>
                    </li>
                    <li><a href="#"><i className="fa-solid fa-users"></i> Shop Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/admin/all-shop-inactive"}><i className="fa-solid fa-check"></i> Shop List Inactive</Link></li>
                            <li><Link to={"/admin/all-shop-active"}><i className="fa-solid fa-check"></i> Shop List Active</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}