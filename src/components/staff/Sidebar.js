import {Link} from "react-router-dom";


export default function Sidebar(){
    const user = JSON.parse(localStorage.getItem('user'));

    return(
        <>
            <div id="menu">
                <ul>
                    <li>
                        <div className={'d-flex align-items-center'}>
                            <img className={"ms-2"} style={{height:"30px",width: "30px",borderRadius:"50%"}} src={user.image}/>
                            <a>{ user.name}</a>
                        </div>
                    </li>
                    <li><a><i className="fa-solid fa-user"></i> Staff</a></li>
                    <li><Link to={"/"}><i className="fa-solid fa-house"></i> Back Home</Link></li>
                    <li><Link to={"/staff/edit-staff"}><i className="fa-solid fa-pen"></i> Personal Information</Link></li>
                </ul>
            </div>
        </>
    )
}