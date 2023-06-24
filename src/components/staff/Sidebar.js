import {Link} from "react-router-dom";


export default function Sidebar(){

    return(
        <>
            <div id="menu">
                <ul>
                    <li><a><i className="fa-solid fa-user"></i> Staff</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img src="./img/brand_04.png" alt="" className={'img-admin'}/>
                            <a>Dương Văn Dài</a>
                        </div>
                    </li>
                    <li><Link to={"/staff"}><i className="fa-solid fa-house"></i> Main</Link></li>
                    <li><Link to={"/staff/edit-staff"}><i className="fa-solid fa-pen"></i> Personal Information</Link></li>
                </ul>
            </div>
        </>
    )
}