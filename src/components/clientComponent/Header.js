


export default function Header(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa-solid fa-shop mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none me-3" href="#">Become a seller  </a>
                            <i className="fa-solid fa-people-roof mx-2"/>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="#">Manage</a>
                        </div>
                        <div>
                            <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw" /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}