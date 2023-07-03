import "./shopCss/shopCss.css"
import {useEffect, useState} from "react";
import {enablingShop, getShopPagination, rejectShop, searchShop} from "../../service/admin/shopService";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../../pagination/Pagination";


const ListShop = () => {

    const dispatch = useDispatch();
    let [filters,setFilters] = useState({
        page:1,
        page_size: 3
    })
    const [reload, setReload] = useState(0)

    const listShop = useSelector(({shop}) => {
        return shop.listShop
    })
    const total = useSelector(({shop}) => {
        return shop.total
    })
    // const reload = useSelector(({shop}) => {
    //     return shop.reload
    // })

    console.log("reload", reload)
    console.log('listShop:', listShop)

    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value)
    }
    const handleSearch = () => {
        dispatch(searchShop(name))
    }
    const handleConfirm = (idUser,e) => {
        e.preventDefault();
        setReload(idUser)
        dispatch(enablingShop(idUser))
    }

    const handleReject = (idUser,e) => {
        e.preventDefault();
        setReload(idUser)
        dispatch(rejectShop(idUser))
    }
    const handlePageChange = (currentPage) => {
        setFilters({
            ...filters,
            page: currentPage
        })
    }
    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
            dispatch(getShopPagination(filters))
        }
        , [page,page_size, reload])


    return (
        <>
            <div className={"row text-center mt-3"}>
                <div className={"col-12"}>
                    <h2 className="txtdeepshadow">Shop List Inactive</h2>
                </div>
                <div className="d-flex col-4" style={{float: "right"}}>
                    {/*<input type="text" className="form-control" id="inputMobileSearch"*/}
                    {/*       placeholder="Search ..." onChange={(e) => {handleInput(e)}}/>*/}
                    {/*<button className="btn-icon"><i*/}
                    {/*    className="fa fa-fw fa-search text-dark mr-2" onClick={() => {handleSearch()}}/></button>*/}
                </div>
            </div>
            <div className="row mt-3">
                {listShop.map((item) =>
                    <div className="col-4" id={item.id}>
                        <div className="card mb-4" >
                            <div className="card-header py-3" style={{height: "7em"}}>
                                <div className={"row"}>
                                    <div className={"col-md-2 align-items-center"}>

                                        {item.avatar && item.avatar !== 'null' ?
                                            <img
                                                src={item.avatar}
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
                                        <p className={"name-staff"}>{item.name}</p>
                                        <p className={"position-staff"}>{item.country}</p>
                                    </div>
                                    <div className={"col-md-3 icon-staff"}>
                                        <div className="dropdown">
                                            <button style={{border: "none", backgroundColor: "white"}}><i className="fa-solid fa-caret-down icon-staff"></i></button>
                                            <div className="dropdown-content link-staff" style={{width:"180px", height: "auto"}}>
                                                <div style={{textAlign: "center", height: "50%"}}>
                                                    <a href="" style={{fontWeight: "bold"}} onClick={(e) => {
                                                        handleConfirm({storeID: item.id},e)
                                                    }}>Confirm</a>
                                                </div>
                                                <div style={{textAlign:"center", height: "50%"}}>
                                                    <a href="" style={{fontWeight: "bold"}} onClick={(e) => {
                                                        handleReject({storeID: item.id},e)
                                                    }}>Reject</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 wrapper">
                                        <strong>Email</strong>
                                        <div className="box-ndc"><span className="marquee">{item.email}</span></div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 wrapper">
                                        <strong>Phone Number</strong>
                                        <div className="box-ndc"><span className="marquee">{item.telephone}</span></div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 wrapper">
                                        <strong>Address</strong>
                                        <div className="box-ndc"><span className="marquee">{item.address}</span></div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 wrapper">
                                        <strong>Origin</strong>
                                        <div className="box-ndc"><span className="marquee">{item.origin}</span></div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 wrapper">
                                        <strong>Status</strong>
                                        <span style={{color: "red"}}><strong>{item.status}</strong></span>
                                    </li>
                                </ul>
                            </div>
                            <div className={'button-position'}>
                                {/*<button type="button" className="button4">*/}
                                {/*    View more*/}
                                {/*</button>*/}
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
export default ListShop;