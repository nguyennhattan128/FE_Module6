
import Advertisement from "../../components/userComponent/Advertisement";
import Category from "../../components/userComponent/Category";
import ListProduct from "../../components/userComponent/ListProduct";
import {useEffect, useState} from "react";
import {getCategories} from "../../service/users/productService";


export default function Main(){




    return(
        <>
            <Advertisement/>
            <Category/>
            <ListProduct/>
        </>
    )
}