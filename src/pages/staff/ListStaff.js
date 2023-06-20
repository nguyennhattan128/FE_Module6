import "./ListStaff.css"

export default function ListStaff(){
    return(
        <>
                    <div className="row mt-3">
                        <div className="col-4">
                            <div className="item1">
                                <div className="row">
                                    <div className="col-8 p-2">
                                        <h2>150</h2>
                                        <h6>New orders</h6>
                                    </div>
                                    <div className="col-4 pt-3">
                                        <img src="img/img1.png" style={{width: '60px', height:"60px"}} alt=""/>
                                    </div>
                                    <div className="col-12 d-flex text-center">
                                        <div className="more">More info</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="item2">
                                <div className="row">
                                    <div className="col-8 p-2">
                                        <h2>53%</h2>
                                        <h6>Bounce Rate</h6>
                                    </div>
                                    <div className="col-4 pt-3">
                                        <img src="img/img2.png" style={{width: '40px', height:"40px"}} alt=""/>
                                    </div>
                                    <div className="col-12 d-flex text-center">
                                        <div className="more">More info</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="item3">
                                <div className="row">
                                    <div className="col-8 p-2">
                                        <h2>65</h2>
                                        <h6>Unique Visitors</h6>
                                    </div>
                                    <div className="col-4 pt-3">
                                        <img src="img/img4.png" style={{width: '50px', height:"50px"}} alt=""/>
                                    </div>
                                    <div className="col-12 d-flex text-center">
                                        <div className="more">More info</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
import {allStaff} from "../../service/users/userService";
import {useEffect, useState} from "react";


export default function ListStaff(){
    const [staffs, setStaffs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            allStaff()
                .then((data) => {
                    console.log(data)
                    setStaffs(data)
                    setLoading(false)
                })
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [])



    if (loading) {
        return <div>Loading All Staff ...</div>
    }

    if (error) {
        return <div>{error}</div>
    }


    return(
        <>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">List of Staff</h1>
                        <p>
                            Đây là danh sách nhân viên dành cho Admin quản lý
                        </p>
                    </div>
                </div>
                <div className="row">
                    <table >
                        <tr style={{backgroundColor:"beige", border:"grey", textAlign:"center"}}>
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
                    {staffs.map((staff) => {
                        return (
                        <tr className="col-12 col-md-3 p-5 mt-3" key={staff.id} style={{backgroundColor:"aquamarine", border:"black", color:"black"}}>
                            <td><img src={staff.image} className="rounded-circle img-fluid border" style={{width:"50px", height:"50px"}}/></td>
                            <td><h5 className="text-center mt-3 mb-3" style={{backgroundColor:"pink"}}>{staff.username}</h5></td>
                            <td><h5 className="text-center mt-3 mb-3" style={{fontSize:"15px"}}>{staff.email}</h5></td>
                            <td><h5 className="text-center mt-3 mb-3">{staff.name}</h5></td>
                            <td><h5 className="text-center mt-3 mb-3">{staff.address}</h5></td>
                                <td><h5 className="text-center mt-3 mb-3">{staff.age}</h5></td>
                                    <td><h5 className="text-center mt-3 mb-3">{staff.phoneNumber}</h5></td>
                                        <td><h5 className="text-center mt-3 mb-3">{staff.salary}</h5></td>
                                            <td><p className="text-center"><a className="btn btn-success" style={{margin:"auto", display:"inline-block ", textAlign:"center"}}>Manager</a></p></td>
                        </tr>
                        )
                    })}
                    </table>

                </div>
            </section>
        </>
    )
}