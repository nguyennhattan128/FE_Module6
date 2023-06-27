import {Link} from "react-router-dom";


export default function Sidebar(){
    let user = JSON.parse(localStorage.getItem("user"))

    return(
        <>
            <div id="menu"style={{position:"fixed", zIndex:"1000"}}>
                <ul>
                    <li><a><i className="fa-solid fa-user"></i> Admin</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img style={{borderRadius:"50%"}} src={user.image} alt="" className={'img-admin'}/>
                            <a>{user.username}</a>
                        </div>
                    </li>
                    <li><Link to={"/admin"}><i className="fa-solid fa-house"></i> Main</Link></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-users"></i> Staff Management</a>
                        <ul className="sub-menu">
                            <li><Link to={"/admin/all-staff"}><i className="fa-solid fa-check"></i> Staff List</Link></li>
                            <li><Link to={"/admin/add-staff"}><i className="fa-solid fa-check"></i> Add Staff</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}