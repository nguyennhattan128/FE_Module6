import {Link} from "react-router-dom";


export default function Navbar(){


    return(
      <>
          <nav className="navbar navbar-expand-lg navbar-light shadow">
              <div className="container d-flex justify-content-between align-items-center">
                  <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                      Zay
                  </a>
                  <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>
                  <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                      <div className="flex-fill">
                          <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                              <li className="nav-item">
                                  <Link className="nav-link" to={'/'}>Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to={'/about'}>About</Link>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="shop.html">Shop</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="contact.html">Contact</a>
                              </li>
                          </ul>
                      </div>
                      <div className="navbar align-self-center d-flex">
                          <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                              <div className="input-group">
                                  <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                  <div className="input-group-text">
                                      <i className="fa fa-fw fa-search" />
                                  </div>
                              </div>
                          </div>
                          <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                              <i className="fa fa-fw fa-search text-dark mr-2" />
                          </a>
                          <a className="nav-icon position-relative text-decoration-none" href="#">
                              <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                          </a>
                          <a className="nav-icon position-relative text-decoration-none" href="#">
                              <i className="fa fa-fw fa-user text-dark mr-3" />
                              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                          </a>
                      </div>
                  </div>
              </div>
          </nav>
      </>
    )
}