export default function Header(){

    return(
        <>
            <div id="header">
                <div  className={'button-nav logo'} ><i className="fa-solid fa-bars"></i></div>
                <div className={'button-nav'}><a href="/staff">Main</a></div>
                <div className={'button-nav'} ><a href="/">Sign Out</a></div>
            </div>
        </>
    )
}