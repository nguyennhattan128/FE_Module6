import {Link} from "react-router-dom";

export default function Header(){
    let user = JSON.parse(localStorage.getItem('user'));

    return(
        <>
            <div id="header" style={{position: "fixed", top: 0, left: "19%", backgroundColor: "#efefef", zIndex: 1000,paddingTop: "15px", paddingLeft: "20px"}}>
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                <div>
                    {
                        user ? <>
                            {
                                user.role === "admin" ? <><div className={'button-nav'}><Link to={"/admin"}>Main</Link></div></> : <></>
                            }
                            {
                                user.role === "staff" ? <><div className={'button-nav'}><Link to={"/staff"}>Main</Link></div></> : <></>
                            }
                            {
                                user.role === "seller" ? <><div className={'button-nav'}><Link to={"/shop-owner"}>Main</Link></div></> : <></>
                            }
                        </> : <></>
                    }
                </div>
                <div className={'button-nav'} style={{textAlign: "right", marginLeft: "50%"}}><a href="/"><img style={{width: "30px", height: "30px", borderRadius: "50%"}} src={"https://th.bing.com/th/id/OIP.XTwQxTeTOffeUV2k9_hr5AHaEo?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/></a></div>
            </div>
            <div id="header"></div>
        </>
    )
}