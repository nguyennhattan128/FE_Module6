import {Link} from "react-router-dom";
import './clientComponentCss/navbar.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export default function Navbar() {
    const currentPath = window.location.pathname;
    let user = JSON.parse(localStorage.getItem('user'));
    const [value, setValue] = useState("");

    const logOut = () => {
        localStorage.clear()
    }
    const navigate = useNavigate();


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-success logo h1 align-self-center" to={'/'}>Zay</Link>
                    <div className="row mb-3 mt-2">
                        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        </div>
                        {currentPath === '/' ? <div className="col-10 d-flex">
                            <input type="text" className="form-control" id="inputMobileSearch"
                                   onChange={(e) => setValue(e.target.value)}
                                   placeholder="Search ..."/>
                            <button className="btn-icon" type="submit" onClick={() => navigate("search-main/" + value)}>
                                <i
                                    className="fa fa-fw fa-search text-dark mr-2"/></button>
                            {user != null && user.role === 'client' ?
                                <button className="btn-icon"><Link to={"/pending"}><i
                                    className="fa-solid fa-p" style={{color: "#7e7c7c"}}></i></Link></button> : <></>}
                            {user != null && user.role === 'client' ?
                                <button className="btn-icon"><Link to={"/success"}><i
                                    className="fa-solid fa-receipt" style={{color: "#7e7c7c"}}></i></Link>
                                </button> : <></>}
                        </div> : <></>}

                        <div className="col-2 d-flex justify-content-center align-items-center ">
                            <a className="nav-icon position-relative text-decoration-none mx-3" href="#">
                                <Link to="/order">
                                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                </Link>
                                <span
                                    className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                            </a>
                            <a className="nav-icon position-relative text-decoration-none mx-3">
                                <div className="dropdown">
                                    <i className=" fa-solid fa-user text-dark mr-3"/>
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                                    <div className="dropdown-content" style={{width: "180px"}}>
                                        {
                                            user ? <>
                                                <Link to={'/my-account'}>My account</Link>
                                                <br/>
                                                <br/>
                                                <Link to={'/login'} onClick={() => {
                                                    logOut()
                                                }}>Log out</Link>
                                                <br/>
                                                <br/>
                                                {
                                                    user != null && user.role === "admin" ? <> <Link
                                                        to={'/admin'}>Admin</Link></> : <></>
                                                }
                                                {
                                                    user != null && user.role === "staff" ? <> <Link
                                                        to={'/staff'}>Staff</Link></> : <></>
                                                }
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