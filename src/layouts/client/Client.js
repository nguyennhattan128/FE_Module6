import Header from "../../components/clientComponent/Header";
import Navbar from "../../components/clientComponent/Navbar";
import Footer from "../../components/clientComponent/Footer";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function Client(){

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