import {Link} from "react-router-dom";


export default function Sidebar(){

    return(
        <>
            <div id="menu"style={{position:"fixed", zIndex:"1000"}}>
                <ul>
                    <li><a><i className="fa-solid fa-user"></i> Admin</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img style={{borderRadius:"50%"}} src="https://th.bing.com/th/id/OIP.XTwQxTeTOffeUV2k9_hr5AHaEo?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className={'img-admin'}/>
                            <a>Nguyễn Văn Nam</a>
                        </div>
                    </li>
                    <li><Link to={"/admin"}><i className="fa-solid fa-house"></i> Main</Link></li>
                    <li><a><i className="fa-solid fa-users"></i> Staff Management</a>
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