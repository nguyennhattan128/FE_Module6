import "./staffCss/staffCss.css"
import {useEffect, useState} from "react";
import {deleteStaffById, getStaffList, getStaffPagination, searchStaff} from "../../service/staff/staffService";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../../pagination/Pagination";
import {Link, useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import Swal from "sweetalert2";



const ListStaff = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    let [filters,setFilters] = useState({
        page:1,
        page_size: 3
    })
    let [show,setShow] = useState(false)
    let [idUser,setIdUser] = useState(0)
    const handleClose = () => {
        setShow(false)
    }

    const listStaff = useSelector(({staff}) => {
        return staff.listStaff
    })
    const total = useSelector(({staff}) => {
        return staff.total
    })


    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value)
    }
    const handleSearch = () => {
        dispatch(searchStaff(name))
    }
    const handlePageChange = (currentPage) => {
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
        });
        setFilters({
            ...filters,
            page: currentPage
        })
    }
    const handleDelete = () => {
        setShow(true)
    }
    const deleteStaff = async (idStaff) => {
        dispatch(deleteStaffById(idStaff)).then(()=>{
            dispatch((getStaffPagination(filters))).then(()=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You have successfully deleted employee account',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
        })
        setShow(false)
    }
    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
            dispatch(getStaffPagination(filters))
        }
        , [page,page_size])


    return (
        <>
            <Modal show={show} onHide={handleDelete} animation={false}>
                <Modal.Header>
                    <Modal.Title>Confirm delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{color:"red"}}>Do you really want to remove this employee from the list ?</Modal.Body>
                <Modal.Footer>
                    <Button style={{width:"75px"}} variant="danger" onClick={()=>{deleteStaff(idUser)}}>
                        Oke
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className={"row text-center mt-3"}>
                <div className={"col-8"}>
                    <h2>Staff List</h2>
                </div>
                <div className="d-flex col-4" style={{float: "right"}}>
                    <input type="text" className="form-control" id="inputMobileSearch"
                           placeholder="Search ..." onChange={(e) => {handleInput(e)}}/>
                    <button onClick={() => {handleSearch()}} className="btn-icon"><i
                        className="fa fa-fw fa-search text-dark mr-2" /></button>
                </div>
            </div>
            <div className="row mt-3">
                {listStaff.map((item) =>
                    <div className="col-4" key={item.id}>
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <div className={"row"}>
                                    <div className={"col-md-2 align-items-center"}>

                                        {item.image && item.image !== 'null' ?
                                            <img
                                                src={item.image}
                                                className="image-staff"
                                                alt="Townhouses and Skyscrapers"
                                            /> :
                                            <img
                                                src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
                                                className="image-staff"
                                                alt="Townhouses and Skyscrapers"
                                            />}
                                    </div>
                                    <div className={"col-md-7"}>
                                        <p className={"name-staff"}>{item.username}</p>
                                        <p className={"position-staff"}>{item.role}</p>
                                    </div>
                                    <div className={"col-md-3 icon-staff"}>
                                        <div className="dropdown">
                                            <button style={{border: "none", backgroundColor: "white"}}><i className="fa-solid fa-caret-down icon-staff"></i></button>
                                            <div className="dropdown-content link-staff" style={{width:"180px", height: "auto"}}>
                                                <div style={{textAlign: "center", height: "50%"}}>
                                                    <Link to={`/admin/edit-staff/${item.id}`}>Edit</Link>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                    <Link  onClick={()=>{setIdUser(item.id);setShow(true)}}>Delete</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Email
                                        <span>{item.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Phone Number
                                        <span>{item.phoneNumber}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Address
                                        <span>{item.address}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Age
                                        <span>{item.age}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={'button-position'}>
                                <button type="button" className="button4">
                                    View more
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <div className={"pagination"}>
                <Pagination page={page} page_size={page_size} total={total} onPageChange={handlePageChange}/>
            </div>


        </>
    )
}
export default ListStaff;