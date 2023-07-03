import {Link,useParams} from "react-router-dom";
import Pagination from "../../pagination/Pagination";
import {useState,useEffect,} from "react";
import {useSelector,useDispatch} from "react-redux";
import {productInShop, showProductByName} from "../../service/product/ProductService";
import "./clientCss/viewShop.css"


export default function ViewSearchMain() {
    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
    })
    const dispatch = useDispatch();
    const[filters,setFilters] = useState({
        page: 1,
        page_size: 4
    })
    const param = useParams()
    const nameProduct = param.name

    const listProducts = useSelector(({product}) => {
        return product.listProduct2
    })
    const total = useSelector(({product}) => {
        return product.total
    })

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
    const page_size = filters.page_size;
    const page = filters.page
    useEffect(() => {
        dispatch(showProductByName({filters,nameProduct}))
    },[page_size,page,nameProduct])

    return (
        <>
            <div className="container py-5">
                <div className="row ">
                    <div className="col-lg-2">
                        <div className={"d-flex align-items-center "}>
                            <i className="fa-solid fa-bars"></i>
                            <h2 className="px-2 shop-sidebar">Categories</h2>
                        </div>
                    </div>
                    <div className="col-lg-10 mt-4">
                        <div className="row">
                            <div className="col-md-8 pb-4">
                                <button type="button" className="btn btn-success shop-btn ms-3">Latest</button>
                                <button type="button" className="btn btn-success shop-btn">Best seller</button>
                            </div>
                            <div className="col-md-4 pb-4">
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
                            {listProducts && listProducts.map((item) =>
                                <div className="col-12 col-md-3 mb-4 card-hover" key={item.id}>
                                    <div className="card h-100">
                                        <Link className="nav-link" to={'/detail/'+item.id}>
                                            <img src={item.image} className="card-img-top card-size" alt="..." />
                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                <ul className="list-unstyled div-content">
                                                <span>
                                                    <li><Link className="btn btn-success text-white" to={'/shop/'+item.store.id}><i
                                                        className="fa-solid fa-shop"></i></Link></li>
                                                <li><Link to={'/detail/'+item.id} className="btn btn-success text-white mt-2"
                                                ><i className="far fa-eye"></i></Link>
                                                </li>
                                                <li><Link className="btn btn-success text-white mt-2"
                                                          to={'/order/'}><i className="fas fa-cart-plus"></i></Link>
                                                </li>
                                                </span>
                                                </ul>
                                            </div>
                                        </Link>

                                        <div className="card-body "style={{fontSize:"15px !important"}}>
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    Quantities : {item.quantity}
                                                </li>
                                                <li className="">Price: {item.price}</li>
                                            </ul>
                                            <p className="card-text shop-text">
                                                {item.description}
                                            </p>
                                            <p className="text-muted">
                                               </p>
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