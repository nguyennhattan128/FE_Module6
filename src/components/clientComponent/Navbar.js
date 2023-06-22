import {Link} from "react-router-dom";
import './clientComponentCss/navbar.css'


export default function Navbar() {
    let user = JSON.parse(localStorage.getItem('user'));

    const logOut = () => {
        localStorage.clear()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-success logo h1 align-self-center" href="/">
                        Zay
                    </a>
                    <div
                        className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/about'}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/shop'}>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex mb-3 mt-2">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            </div>
                            <div className="d-flex">
                                <input type="text" className="form-control" id="inputMobileSearch"
                                       placeholder="Search ..."/>
                                <button className="btn-icon" type="submit"><i
                                    className="fa fa-fw fa-search text-dark mr-2"/></button>
                            </div>
                            <a className="nav-icon position-relative text-decoration-none ms-2" href="#">
                                <Link to="/cart">
                                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                </Link>
                                <span
                                    className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none ms-2" href="#">

                                <div className="dropdown">
                                    <i className=" fa-solid fa-user text-dark mr-3"/>
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                                    <div className="dropdown-content">
                                        {
                                            user ? <>
                                                <Link to={'/'}>My account</Link>
                                                <br/>
                                                <br/>
                                                <Link to={'/login'} onClick={() => {
                                                    logOut()
                                                }}>Log out</Link>
                                            </> : <>
                                                <Link to={'/Register'}>Register</Link>
                                                <br/>
                                                <br/>
                                                <Link to={'/login'}>Login</Link>
                                            </>
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}