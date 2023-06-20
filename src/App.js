import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import Path from "./constant/Path"
import Client from "./layouts/client/Client";
import Admin from "./layouts/admin/Admin";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import ViewShop from "./pages/client/ViewShop";
import About from "./pages/client/About";
import Cart from "./pages/client/Cart";
import Contact from "./pages/client/Contact";
import ListShopOwner from "./pages/shopOwner/ListShopOwner";
import ListAdmin from "./pages/admin/ListAdmin";
import ShopOwner from "./layouts/shop_owner/ShopOwner";
import AddProduct from "./pages/client/AddProduct";
import AddStaffAccount from "./pages/management/AddStaffAccount";
import EditStaffAccount from "./pages/management/EditStaffAccount";
import CreateShop from "./pages/client/CreateShop";
import Staff from "./layouts/staff/Staff";
import ListStaff from "./pages/staff/ListStaff";


function App() {
    return (
        <>
        <Routes>
            <Route path={Path.LOGIN} element={<Login/>}/>
            <Route path={Path.REGISTER} element={<Register/>}/>
            <Route path={Path.HOME} element={<Client/>}>
                <Route path='' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/shop' element={<ViewShop/>}/>
                <Route path='/add-product' element={<AddProduct/>}/>
                <Route path='/create-shop' element={<CreateShop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
            <Route path='admin' element={<Admin/>}>
                <Route path='' element={<ListAdmin/>}/>
                <Route path='add-staff' element={<AddStaffAccount/>}/>
                <Route path='edit-staff' element={<EditStaffAccount/>}/>
            </Route>
            <Route path='shop-owner' element={<ShopOwner/>}>
                <Route path='' element={<ListShopOwner/>}/>
            </Route>
            <Route path='staff' element={<Staff/>}>
                <Route path='' element={<ListStaff/>}/>
            </Route>
        </Routes>
</>
)
}

export default App;
