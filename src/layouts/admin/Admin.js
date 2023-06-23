import "./Admin.css"
import Sidebar from "../../components/admin/Sidebar";
import Content from "../../pages/admin/Content";

export default function Admin(){
    return(
        <>
            <div id="container">
                <Sidebar/>
                <Content/>
            </div>
        </>
    )
}