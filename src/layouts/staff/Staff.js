import "./Staff.css"
import Sidebar from "../../components/staff/Sidebar";
import Content from "../../pages/staff/Content";

export default function Staff(){
    return(
        <>
            <div id="container">
                <Sidebar/>
                <Content/>
            </div>
        </>
    )
}