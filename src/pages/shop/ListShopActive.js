import "./shopCss/shopCss.css"
import {useEffect, useState} from "react";
import { getShopPaginationActive, searchShopActive} from "../../service/admin/shopService";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../../pagination/Pagination";


const ListShopActive = () => {

    const dispatch = useDispatch();
    let [filters,setFilters] = useState({
        page:1,
        page_size: 6
    })

    const listShopActive = useSelector(({shop}) => {
        return shop.listShop
    })
    const total = useSelector(({shop}) => {
        return shop.total
    })


    console.log('listShopActive:', listShopActive)

    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value)
    }
    const handleSearch = () => {
        dispatch(searchShopActive(name))
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
            dispatch(getShopPaginationActive(filters))
        }
        , [page,page_size])


    return (
        <>
            <div className={"row text-center mt-3"}>
                <div className={"col-8"}>
                    <h2>Shop List Active</h2>
                </div>
                <div className="d-flex col-4" style={{float: "right"}}>
                    <input type="text" className="form-control" id="inputMobileSearch"
                           placeholder="Search ..." onChange={(e) => {handleInput(e)}}/>
                    <button className="btn-icon"><i
                        className="fa fa-fw fa-search text-dark mr-2" onClick={() => {handleSearch()}}/></button>
                </div>
            </div>
            <div className="row mt-3">
                {listShopActive.map((item) =>
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
                                                    <a href="#" style={{fontWeight: "bold"}}>Confirm</a>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                    <a href="#">Reject</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <strong>Email</strong>
                                        <span>{item.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <strong>Phone Number</strong>
                                        <span>{item.telephone}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <strong>Address</strong>
                                        <span>{item.address}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <strong>Origin</strong>
                                        <span>{item.origin}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <strong>Status</strong>
                                        <span style={{color: "red"}}><strong>{item.status}</strong></span>
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
export default ListShopActive;