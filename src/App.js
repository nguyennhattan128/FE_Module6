import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import  Path from "./constant/Path"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/client/ProductDetail";
import CreateShop from "./pages/client/CreateShop";
import ListAdmin from "./pages/admin/ListAdmin";
import AddStaffAccount from "./pages/management/AddStaffAccount";
import EditStaffAccount from "./pages/management/EditStaffAccount";
import ShopOwner from "./layouts/shop_owner/ShopOwner";
import ListShopOwner from "./pages/shopOwner/ListShopOwner";
import Staff from "./layouts/staff/Staff";
import ListStaff from "./pages/staff/ListStaff";
import EditStaff from "./pages/staff/EditStaff";
import About from "./pages/client/About";
import ViewShop from "./pages/client/ViewShop";
import Cart from "./pages/client/Cart";
import Contact from "./pages/client/Contact";
import Client from "./layouts/client/Client";
import Admin from "./layouts/admin/Admin";


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
                <Route path='/create-shop' element={<CreateShop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/detail' element={<ProductDetail/>}/>
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
                <Route path='edit-staff' element={<EditStaff/>}/>
            </Route>
        </Routes>
</>
)
}

export default App;
