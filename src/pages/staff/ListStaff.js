import "./staffCss/staffCss.css"
import {useEffect, useState} from "react";
import {getStaffList, searchStaff} from "../../service/staff/staffService";
import {useDispatch, useSelector} from "react-redux";


const ListStaff = () => {
    const dispatch = useDispatch();

    const listStaff = useSelector(({staff}) => {
        return staff.listStaff
    })

    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value)
    }
    const handleSearch = () => {
        dispatch(searchStaff(name))
    }

    useEffect(() => {
            dispatch(getStaffList())
        }
        , [])


    return (
        <>
            <div className={"row text-center mt-3"}>
                <div className={"col-8"}>
                    <h2>Staff List</h2>
                </div>
                <div className="d-flex col-4" style={{float: "right"}}>
                    <input type="text" className="form-control" id="inputMobileSearch"
                           placeholder="Search ..." onChange={(e) => {handleInput(e)}}/>
                    <button className="btn-icon"><i
                        className="fa fa-fw fa-search text-dark mr-2" onClick={() => {handleSearch()}}/></button>
                </div>
            </div>
            <div className="row mt-3">
                {listStaff.map((item) =>
                    <div className="col-4">
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
                                            <button><i className="fa-solid fa-caret-down icon-staff"></i></button>
                                            <div className="dropdown-content link-staff ">
                                                <a href="#">Edit</a>
                                                <a href="#">Delete</a>
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
        </>
    )
}
export default ListStaff;