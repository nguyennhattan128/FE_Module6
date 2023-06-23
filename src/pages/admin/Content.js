import Header from "../../components/adminComponent/Header";
import Footer from "../../components/adminComponent/Footer";
import Action from "../../components/adminComponent/Action";
import {Outlet} from "react-router-dom";


export default function Content(){
    return(
        <>
            <div id="content">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}