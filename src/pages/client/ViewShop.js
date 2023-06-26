import "./clientCss/viewShop.css"
import {useState,useEffect,} from "react";
import {useSelector,useDispatch} from "react-redux";
import {productInShop} from "../../service/product/ProductService";
import Pagination from "../../pagination/Pagination";
import {Link, useParams} from "react-router-dom";
export default function ViewShop(){
    const dispatch = useDispatch();
    const param = useParams()
    const idStore = param.idStore
    console.log(idStore)

    const[filters,setFilters] = useState({
        page: 1,
        page_size: 4
    })
    const idUser = JSON.parse(localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).idUser : undefined
    const listProducts = useSelector(({product}) => {
        return product.listProduct
    })
    console.log("listProducts:",listProducts)
    const total = useSelector(({product}) => {
        return product.total
    })
    const handlePageChange = (currentPage) => {
        setFilters({
            ...filters,
            page: currentPage
        })
    }

    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
        dispatch(productInShop({filters,idStore}))
    },[page_size,page])

    return(
        <>
            <div className="container py-5">
                <div className="row ">
                    <div className="col-lg-2">
                        <div className={"d-flex align-items-center "}>
                            <i className="fa-solid fa-bars"></i>
                            <h1 className="px-2 shop-sidebar">Categories</h1>
                        </div>

                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="src/components/userComponent#">
                                    Gender
                                </a>
                                <ul className="collapse show list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Men</a></li>
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Women</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="src/components/userComponent#">
                                    Sale
                                </a>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Sport</a></li>
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Luxury</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="src/components/userComponent#">
                                    Product
                                </a>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Bag</a></li>
                                    <li><a className="text-decoration-none" href="src/components/userComponent#">Sweather</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10 mt-4">
                        <div className="row">
                            <div className="col-md-2 sort-by">
                                Sorted by
                            </div>
                                <div className="col-md-8 pb-4">
                                    <button type="button" className="btn btn-success shop-btn">Latest</button>
                                    <button type="button" className="btn btn-success shop-btn">Best seller</button>
                                </div>
                                <div className="col-md-2 pb-4">
                                    <div className="d-flex">
                                        <input type="text" className="form-control" id="inputMobileSearch"
                                               placeholder="Search ..."/>
                                        <button className="btn-icon" type="submit"><i
                                            className="fa fa-fw fa-search text-dark mr-2"/></button>
                                    </div>
                                </div>
                                <div/>
                            </div>

                        <div className="row">
                            {/*product*/}
                            {listProducts.map((item) =>
                                <div className="col-12 col-md-3 mb-4 card-hover" key={item.id}>
                                    <div className="card h-100">
                                        <Link className="nav-link" to={'/detail/'+item.id}>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled div-content">
                                                <span>
                                                    <li><a className="btn btn-success text-white" href="shop-single.html"><i
                                                        className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2"
                                                       href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2"
                                                       href="shop-single.html"><i className="fas fa-cart-plus"></i></a>
                                                </li>
                                                </span>
                                                </ul>
                                            </div>
                                        </Link>

                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    Quantities : {item.quantity}
                                                </li>
                                                <li className="text-muted text-right">{item.price}</li>
                                            </ul>
                                            <p className="card-text shop-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                            </p>
                                            <p className="text-muted">bought (24)</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <div className={"pagination"}>
                <Pagination page={page} page_size={page_size} total={total} onPageChange={handlePageChange} />
            </div>

        </>
    )
}