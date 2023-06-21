import {Route, Routes} from "react-router-dom";
import Main from "./pages/client/Main";
import  Path from "./constant/Path"
import User from "./layouts/User";
import ViewShop from "./components/userComponent/ViewShop";
import About from "./components/userComponent/About";
import Cart from "./components/userComponent/Cart";
import Contact from "./components/userComponent/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


import ProductDetail from "./pages/client/ProductDetail";



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
                  <Route path='/detail' element={<ProductDetail/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Route>


          </Routes>
      </>
  )
}

export default App;
