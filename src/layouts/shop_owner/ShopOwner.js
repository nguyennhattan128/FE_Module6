import "./ShopOwner.css"
import Sidebar from "../../components/shopOwnerComponent/Sidebar";
import Content from "../../pages/shop_owner/Content";

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