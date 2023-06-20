import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import Path from "./constant/Path"
import User from "./layouts/User";
import Admin from "./layouts/admin/Admin";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import ViewShop from "./components/userComponent/ViewShop";
import About from "./components/userComponent/About";
import Cart from "./components/userComponent/Cart";
import Contact from "./components/userComponent/Contact";
import ListShopOwner from "./pages/shop_owner/ListShopOwner";
import ListAdmin from "./pages/admin/ListAdmin";
import ShopOwner from "./layouts/shop_owner/ShopOwner";


function App() {
    return (
        <>
        <Routes>
            <Route path={Path.LOGIN} element={<Login/>}/>
            <Route path={Path.REGISTER} element={<Register/>}/>
            <Route path={Path.HOME} element={<User/>}>
                <Route path='' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/shop' element={<ViewShop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
            <Route path='admin' element={<Admin/>}>
                <Route path='' element={<ListAdmin/>}/>
            </Route>
            <Route path='shop-owner' element={<ShopOwner/>}>
                <Route path='' element={<ListShopOwner/>}/>
            </Route>
        </Routes>
</>
)
}

export default App;
