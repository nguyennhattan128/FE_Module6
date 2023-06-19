import Navbar from "../components/adminComponent/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/adminComponent/Footer";


export default function Management(){

    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}