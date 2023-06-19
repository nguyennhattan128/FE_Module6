import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import  Path from "./constant/Path"
import User from "./layouts/User";

import Management from "./layouts/Management";
import SupperAdmin from "./pages/management/SupperAdmin";
import Admin from "./components/adminComponent/Admin";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import ViewShop from "./components/userComponent/ViewShop";
import About from "./components/userComponent/About";
import AddProduct from "./pages/client/AddProduct";
import AddStaffAccount from "./pages/management/AddStaffAccount";
import EditStaffAccount from "./pages/management/EditStaffAccount";


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
}

export default App;
