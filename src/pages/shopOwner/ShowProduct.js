import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductByStoreId, searchProduct} from "../../service/product/ProductService";
import {useNavigate} from "react-router-dom";

export default function ShowProduct() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(({product}) => {
        return product.listProductByStore;
    });
    const [keyword, setKeyword] = useState('');
    const handleInput = (e) => {
        setKeyword(e.target.value)
    }
    const handleSearch = () => {
        dispatch(searchProduct({keyword:keyword,storeId:user.idStore}))
    }
    useEffect(() => {
        dispatch(getAllProductByStoreId(user.idStore))
    }, [])


    return (
        <>
            <div className="container mt-5 px-2">
                <div className="mb-2 d-flex justify-content-between align-items-center" style={{marginTop: "-20px"}}>
                    <div className="position-relative d-flex">
                        <span className="position-absolute search"></span>
                        <input className="form-control w-100" placeholder="Search by name..." onChange={(e) => {
                            console.log("typing:", e.target.value)
                            handleInput(e)
                        }}/>
                        <button className="btn-icon"
                                onClick={handleSearch}
                        ><i
                            className="fa fa-fw fa-search text-dark mr-2"/></button>
                    </div>
                    <div className="px-2">
                    </div>
                </div>
                <div className="table-responsive" style={{marginTop: "20px"}}>
                    <table className="table table-responsive table-borderless">
                        <thead>
                        <tr className="bg-light">
                            <th scope="col" width="10%">#</th>
                            <th scope="col" width="10%">Name</th>
                            <th scope="col" width="10%">Category</th>
                            <th scope="col" width="10%">Image</th>
                            <th scope="col" width="10%">Price</th>
                            <th scope="col" width="10%">Quantity</th>
                            <th scope="col" width="10%">More Option</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products ?  products.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope="row" style={{fontWeight: 400, fontSize: "18px"}}>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.category.name}</td>
                                    <td><img src={item.image} style={{width: '100px'}}/></td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button className={'btn btn-success'} onClick={() => {
                                            navigate(`/shop-owner/edit-product/${item.id}`)
                                        }}>Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        ) : <></> }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}