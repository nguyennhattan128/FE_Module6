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
import AddProduct from "./pages/client/AddProduct";
import AddStaffAccount from "./pages/management/AddStaffAccount";
import EditStaffAccount from "./pages/management/EditStaffAccount";
import CreateShop from "./pages/client/CreateShop";


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
                  <Route path='/add-product' element={<AddProduct/>}/>
                  <Route path='/create-shop' element={<CreateShop/>}/>
              </Route>
              <Route path={Path.MANAGEMENT} element={<Management/>}>
                  <Route path='admin' element={<Admin/>}/>
                  <Route path='add-staff' element={<AddStaffAccount/>}/>
                  <Route path='edit-staff' element={<EditStaffAccount/>}/>
              </Route>
              <Route path={'test'} element={<Admin/>}/>
          </Routes>
      </>
  )
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
