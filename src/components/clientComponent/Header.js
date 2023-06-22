import {Link} from "react-router-dom";


export default function Header(){

    let user = JSON.parse(localStorage.getItem("user"));
    let idStore = user.idStore;
    console.log(idStore)
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa-solid fa-shop mx-2"></i>
                            {
                                (idStore !== null) ? <Link className="navbar-sm-brand text-light text-decoration-none me-3" to={"/shop-owner"}>My Shop</Link>
                                : <Link className="navbar-sm-brand text-light text-decoration-none me-3" to={"/create-shop"}>Become a seller</Link>
                            }

                            <i className="fa-solid fa-people-roof mx-2"/>
                            <Link className="navbar-sm-brand text-light text-decoration-none" to={"/admin"}>Manage</Link>
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