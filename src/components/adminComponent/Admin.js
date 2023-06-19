import "../admincss/admin.css"

export default function Admin(){
    return(
        <>
            <div>
                {/* Sidebar */}
                <div className="container-fluid" my-4>
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block  ">
                            <div className="d-flex" id="wrapper">
                                {/*    sidebar*/}
                                <div className="bg-white">
                                    <div className="sidebar-heading text-center  primary-text fs-4 fw-bold text-uppercase">
                                        <i className="fas fa-user-secret me-2"></i> ADMIN
                                    </div>
                                    <div className="list-group list-group-flush my-3">
                                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                            <i className="fas fa-project-diagram me-2"></i> Manage Team
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
                            </div>
                        </nav>
                        {/* Nội dung chính */}
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Tiêu đề</h1>
                            </div>
                            <h2>Nội dung chính</h2>
                            <p>Đây là nội dung chính của trang quản trị.</p>
                        </main>
                    </div>
                </div>
                {/* Footer */}
                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-3">
                        © 2023 Tên trang
                    </div>
                </footer>
            </div>
        </>
    )
}