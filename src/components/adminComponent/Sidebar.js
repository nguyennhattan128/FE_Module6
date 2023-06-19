
import "../admincss/navbar.css"
export default function Sidebar(){

    return(
        <>
            <div className="d-flex" id="wrapper">
            {/*    sidebar*/}
                <div className="bg-white">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                    <i className="fas fa-user-secret me-2"></i> Codersbite
                    </div>
                    <div className="list-group list-group-flush my-3">
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
                            <i className="fas fa-tachometer-alt"></i>Dashboard
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-project-diagram me-2"></i> Project
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-chart-line me-2"></i> Analytics
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-paperclip me-2"></i> Report
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-shopping-cart me-2"></i> Store Management
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-gift me-2"></i> Products
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-comment-dots me-2"></i> Chat
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-map-marked-alt me-2"></i> Outlet
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                            <i className="fas fa-project-diagram me-2"></i> Logout
                        </a>
                    </div>
                </div>
                {/*    sidebar end*/}
                <div id="page-content-wrapper">

                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="d-flex -align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item-dropdown">
                                    <a href="#" className="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user me-2"></i>Jone Doe
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a href="#" className="dropdown-item">Profile</a></li>
                                        <li><a href="#" className="dropdown-item">Setting</a></li>
                                        <li><a href="#" className="dropdown-item">Logout</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="container-fluid px-4">
                        Content here
                    </div>

                </div>
            </div>
        </>
    )
}