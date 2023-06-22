import "./ListStaff.css"
import {useEffect, useState} from "react";
import {getStaffList, searchStaff} from "../../service/staff/staffService";
import {useDispatch, useSelector} from "react-redux";


const ListStaff = () => {
    const dispatch = useDispatch();

    const listStaff = useSelector(({staff})=>{
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
            <section className="container">
                <div className={"row1"}>
                    <div className="col-8  pt-3" style={{float:"left"}}>
                        <h1 className="h1">List of Staff</h1>
                    </div>
                    <div className="col-4 pt-3 d-flex button-search" style={{float:"right"}}>
                        <input type="text" className="form-control" id="inputSearch" placeholder="Search ..." value={name}
                               onChange={handleInput} />
                        <button className="btn-icon" type="submit" onClick={handleSearch}>
                            <i className="fa fa-fw fa-search text-dark mr-2" />
                        </button>
                    </div>
                </div>
                <div className="row2">
                    <table>
                        <tr style={{backgroundColor: "beige", border: "grey", textAlign: "center"}}>
                            <th>Avatar</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>PhoneNumber</th>
                            <th>Salary</th>
                            <th>...</th>
                        </tr>
                        {listStaff.map((staff) => {
                            return (
                                <tr className="col-12 col-md-3 p-5 mt-3" key={staff.id}
                                    style={{backgroundColor: "aquamarine", border: "black", color: "black"}}>
                                    <td><img src={staff.image} className="rounded-circle img-fluid border"
                                             style={{width: "50px", height: "50px"}}/></td>
                                    <td><h5 className="text-center mt-3 mb-3"
                                            style={{backgroundColor: "pink"}}>{staff.username}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3"
                                            style={{fontSize: "15px"}}>{staff.email}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.name}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.address}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.age}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.phoneNumber}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.salary}</h5></td>
                                    <td><p className="text-center"><a className="btn btn-success" style={{
                                        margin: "auto",
                                        display: "inline-block ",
                                        textAlign: "center"
                                    }}>Manager</a></p></td>
                                </tr>
                            )
                        })}
                    </table>

                </div>
            </section>
        </>
    )
}
export default ListStaff;