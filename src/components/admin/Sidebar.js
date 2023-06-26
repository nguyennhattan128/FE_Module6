

export default function Sidebar(){

    return(
        <>
            <div id="menu"style={{position:"fixed", zIndex:"1000"}}>
                <ul>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-user"></i> Admin</a></li>
                    <li>
                        <div className={'d-flex'}>
                            <img style={{borderRadius:"50%"}} src="https://th.bing.com/th/id/OIP.XTwQxTeTOffeUV2k9_hr5AHaEo?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className={'img-admin'}/>
                            <a href="src/components/adminComponent#">Nguyễn Văn Nam</a>
                        </div>
                    </li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-house"></i> Main</a></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-list-check"></i> Product Management </a>
                        <ul className="sub-menu">
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Product List</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Add New</a></li>
                            <li><a href="src/components/adminComponent#"><i className="fa-solid fa-check"></i> Kind Of Product</a></li>
                        </ul>
                    </li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-layer-group"></i> Receipt Management</a></li>
                    <li><a href="src/components/adminComponent#"><i className="fa-solid fa-users"></i> Staff Management</a>
                        <ul className="sub-menu">
                            <li><a href="/admin/all-staff"><i className="fa-solid fa-check"></i> Staff List</a></li>
                            <li><a href="/admin/add-staff"><i className="fa-solid fa-check"></i> Add Staff</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}