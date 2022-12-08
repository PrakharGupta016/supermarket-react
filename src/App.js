import {Route,Routes} from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';

import UncontrolledExample from './components/Carousel/Carousel';
import ItemCard from './components/ItemCard/ItemCard';
import Home from './Pages/Home';
import Login from './Pages/login';
import SignUp from './Pages/SignUp';
import WalletPage from './Pages/WalletPage';
import ProductDetails from './Pages/productdetails';
import AdminCategory from './Pages/AdminCategory';
import Cart from './Pages/Cart';
import AdminCategoryForm from './Pages/AdminCategoryForm';
import ProductListing from './Pages/ProductListing';
import AdminProduct from './Pages/AdminProduct';
import AdminHome from './Pages/AdminHome';




function App() {
  return (
   <Routes>
    <Route path = '/' element = {<ProductListing/>}/>
    <Route path = '/login' element={<Login/>}/>
    <Route path ='/signup' element={<SignUp/>}/>
    <Route path ='/wallet' element={<WalletPage/>}/>
    <Route path= '/admin-category' element = {<AdminCategory/>}/>
    <Route path= '/admin-product' element = {<AdminProduct/>}/>
    <Route path= '/admin' element = {<AdminHome/>}/>

    <Route path='/cart' element ={<Cart/>}/>
    <Route path='/admin-product-form' element={<AdminCategoryForm/>}></Route>
    <Route path='/product-details/:id' element={<ProductDetails/>}></Route>


  </Routes>
  );
}

export default App;
