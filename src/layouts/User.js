import Header from "../components/userComponent/Header";
import Navbar from "../components/userComponent/Navbar";
import Footer from "../components/userComponent/Footer";
import {Outlet} from "react-router-dom";


export default function User(){

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}