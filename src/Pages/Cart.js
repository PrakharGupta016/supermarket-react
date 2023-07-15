import React from 'react'
import { useEffect } from 'react';
import CartItem from '../components/Cart/Cart';
import NavBar from '../components/Navbar/NavBar';

const Cart = () => {
  
  return (
    <div>
       <NavBar/>
       <CartItem/>
      
    </div>
  )
}

export default Cart;
