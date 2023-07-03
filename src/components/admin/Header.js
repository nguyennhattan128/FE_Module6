import {Link} from "react-router-dom";

export default function Header(){
    const user = JSON.parse(localStorage.getItem("user"));

    return(
        <>
            <div id="header" style={{position: "fixed", top: 0, left: "19%", backgroundColor: "#efefef", zIndex: 1000,paddingTop: "15px", paddingLeft: "20px"}}>
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                    {
                        user ? <>
                                {user.role === "admin" ? <> <div className={'button-nav'}><Link to={"/admin"}>Main</Link></div></> : <></> }
                                {user.role === "staff" ? <> <div className={'button-nav'}><Link to={"/staff"}>Main</Link></div></> : <></> }
                                {user.role === "seller" ? <> <div className={'button-nav'}><Link to={"/shop-owner"}>Main</Link></div></> : <></> }
                                {user.role === "client" ? <> <div className={'button-nav'}><Link to={"/shop-owner"}>Main</Link></div></> : <></> }
                            </>
                            : <></>
                    }
                </div>
            <div id="header"></div>
        </>
    )
}