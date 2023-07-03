import customAPI from "../../service/customAPI";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function Category(){

    const [shop,setShop] = useState([])


    useEffect(()=>{
        customAPI().get(`/store/show-shop`).then((res)=>{
            const listShop =res.data.data
            setShop(listShop)

        })

    },[])



    return(
        <>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Come visit the beloved store!</h1>
                        <p>
                            These are the shops that have sold the most products recently.
                            Would you like to visit the store and take a look?
                        </p>
                    </div>
                </div>
                <div className="row">
                    {shop ? shop.map ((item)=>
                            <div className="col-12 col-md-3 p-5 mt-3">
                                <img src={item.avatar} className="rounded-circle img-fluid border"  style={{height :"189px", width: "187px"}} />
                                <h5 className="text-center mt-3 mb-3">{item.name}</h5>
                                <p className="text-center"><Link className="btn btn-success" to={`/shop/${item.id}`}>Go Shop</Link></p>
                            </div>
                        )
                        : <></>}


                </div>
            </section>
        </>
    )
}
