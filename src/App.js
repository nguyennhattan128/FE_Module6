import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import Path from "./constant/Path"
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
import ListStaff from "./pages/staff/ListStaff";
import AddProduct from "./pages/shopOwner/AddProduct";
import AddStaffAccount from "./pages/management/AddStaffAccount";
import EditStaffAccount from "./pages/management/EditStaffAccount";
import CreateShop from "./pages/client/CreateShop";
import Staff from "./layouts/staff/Staff";
import EditStaff from "./pages/staff/EditStaff";
import EditShop from "./pages/shopOwner/EditShop";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import EditProduct from "./pages/shopOwner/EditProduct";
import Client from "./layouts/client/Client";


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
            </Route>
            <Route path='admin' element={<Admin/>}>
                <Route path='' element={<ListAdmin/>}/>
                <Route path='add-staff' element={<AddStaffAccount/>}/>
                <Route path='edit-staff' element={<EditStaffAccount/>}/>
                <Route path='edit-shop' element={<EditShop/>}/>
                <Route path='allStaff' element={<ListStaff/>}/>
            </Route>
            <Route path='shop-owner' element={<ShopOwner/>}>
                <Route path='' element={<ListShopOwner/>}/>
                <Route path='add-product' element={<AddProduct/>}/>
                <Route path='edit-product' element={<EditProduct/>}/>
                <Route path='edit-shop' element={<EditShop/>}/>
            </Route>
            <Route path='staff' element={<Staff/>}>
                <Route path='edit-staff' element={<EditStaff/>}/>
                <Route path='edit-shop' element={<EditShop/>}/>
            </Route>
        </Routes>
        <ToastContainer/>
</>
)
}

export default App;
