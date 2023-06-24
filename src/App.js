import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import  Path from "./constant/Path"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/client/ProductDetail";
import CreateShop from "./pages/client/CreateShop";
import ListAdmin from "./pages/admin/ListAdmin";
import AddStaffAccount from "./pages/admin/AddStaffAccount";
import ShopOwner from "./layouts/shop_owner/ShopOwner";
import ListShopOwner from "./pages/shopOwner/ListShopOwner";
import Staff from "./layouts/staff/Staff";
import EditStaff from "./pages/staff/EditStaff";
import About from "./pages/client/About";
import ViewShop from "./pages/client/ViewShop";
import Cart from "./pages/client/Cart";
import Contact from "./pages/client/Contact";
import Client from "./layouts/client/Client";
import Admin from "./layouts/admin/Admin";
import EditShop from "./pages/shopOwner/EditShop";
import AddProduct from "./pages/shopOwner/AddProduct";
import EditProduct from "./pages/shopOwner/EditProduct";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OtpInput from "./pages/auth/OtpInput";
import ListStaff from "./pages/staff/ListStaff";
import ShowProduct from "./pages/shopOwner/ShowProduct";
import Pagination from "./pagination/Pagination";


function App() {
    return (
        <>
        <Routes>
            <Route path={Path.LOGIN} element={<Login/>}/>
            <Route path={Path.REGISTER} element={<Register/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/verify' element={<OtpInput/>}/>
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
                <Route path='all-staff' element={<ListStaff/>}/>
                <Route path='pagination-staff' element={<Pagination/>}/>
            </Route>
            <Route path='shop-owner' element={<ShopOwner/>}>
                <Route path='' element={<ListShopOwner/>}/>
                <Route path='show-product' element={<ShowProduct/>}/>
                <Route path='edit-shop' element={<EditShop/>}/>
                <Route path='add-product' element={<AddProduct/>}/>
                <Route path='edit-product/:id' element={<EditProduct/>}/>
            </Route>
            <Route path='staff' element={<Staff/>}>
                <Route path='edit-staff' element={<EditStaff/>}/>
            </Route>
        </Routes>
</>
)
}

export default App;
