import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import Action from "../../components/admin/Action";
import {Outlet} from "react-router-dom";


export default function Content(){
    return(
        <>
            <div id="content">
                <Header/>
                <Action/>
                <Outlet></Outlet>
                <Footer/>
            </div>
        </>
    )
}