import {Route,Routes} from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';

import UncontrolledExample from './components/Carousel/Carousel';
import ItemCard from './components/ItemCard/ItemCard';
import Home from './Pages/Home';
import Login from './Pages/login';
import SignUp from './Pages/SignUp';
import WalletPage from './Pages/WalletPage';




function App() {
  return (
   <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = '/login' element={<Login/>}/>
    <Route path ='/signup' element={<SignUp/>}/>
    <Route path ='/wallet' element={<WalletPage/>}/>
   </Routes>
  );
}

export default App;
