import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import  Path from "./constant/Path"
import User from "./layouts/User";
import Management from "./layouts/Management";
import Admin from "./components/adminComponent/Admin";
import SupperAdmin from "./pages/management/SupperAdmin";
import Admin from "./pages/admin/Admin";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import ViewShop from "./components/userComponent/ViewShop";
import About from "./components/userComponent/About";
import Cart from "./components/userComponent/Cart";
import Contact from "./components/userComponent/Contact";

import ShopOwner from "./pages/shop_owner/ShopOwner";


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
                 <Route path='admin' element={<Admin/>}/>
                 <Route path='shop-owner' element={<ShopOwner/>}/>
              <Route path={Path.MANAGEMENT} element={<Management/>}>
                  <Route path='admin' element={<Admin/>}/>
              </Route>



          </Routes>
      </>
  )
}

export default App;
