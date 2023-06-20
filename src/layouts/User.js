import Header from "../components/userComponent/Header";
import Navbar from "../components/userComponent/Navbar";
import Footer from "../components/userComponent/Footer";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function User(){

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </>
    )
}