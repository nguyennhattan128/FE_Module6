export default function Header(){

    return(
        <>
            <div id="header" style={{position: "fixed", top: 0, left: "19%", backgroundColor: "#efefef", zIndex: 1000,paddingTop: "15px", paddingLeft: "20px"}}>
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                <div className={'button-nav'}><a href="/staff">Main</a></div>
                <div className={'button-nav'} style={{textAlign: "right", marginLeft: "50%"}}><a href="/"><img style={{width: "30px", height: "30px", borderRadius: "50%"}} src={"https://th.bing.com/th/id/OIP.XTwQxTeTOffeUV2k9_hr5AHaEo?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/></a></div>
            </div>
            <div id="header"></div>
        </>
    )
}