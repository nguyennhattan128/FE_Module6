import "./ShopOwner.css"
import Sidebar from "../../components/shopOwnerComponent/Sidebar";
import Content from "../../pages/shopOwner/Content";

export default function ShopOwner(){
    return(
        <>
            <div id="container">
                <Sidebar/>
                <Content/>
            </div>
        </>
    )
}