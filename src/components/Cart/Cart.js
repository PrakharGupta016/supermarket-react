import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
var item = [
  {
    id:1,
    name: "boat",
    quantity: 1,
    
  },
];


const CartItem = () => {
  const token = localStorage.getItem('token');

  useEffect(()=>{
    fetch('http://localhost:8080/api/cart/?token='+token)
            .then(res=>res.json())
            .then(json=>console.log(json))
  },[])
  const oninc =(id)=>{
    


      setCartItems(cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  }
  const decCartItem = (id) => {
    // find the cart item to remove
     setCartItems(cartItems.map((cartItem) =>
     cartItem.id === id
       ? { ...cartItem, quantity: cartItem.quantity - 1 }
       : cartItem
   ))
  }
  const [cartItems,setCartItems] = useState([]);
  const loginDetails = localStorage.getItem('token');
  console.log(loginDetails)
  // const val = JSON.parse(loginDetails)
  useEffect(()=>{
      setCartItems(item)
      
  },[])
  
  return (
    <div>
      <h2 className="d-flex justify-content-center">Your Cart</h2>
      <hr />
      <div className="p-4 mx-auto d-flex  ">
        <Col
          className="col-xl-7 col-md-7 p-4 m-4 cartDetails"
          style={{ backgroundColor: "#FFC747" }}
        >
          {cartItems.map((i)=>{
           
            return(<Row
              className="p-4  cartDetails"
              style={{ backgroundColor: "white" }}
            >
              <Col>{i.name}</Col>
              <Col>quantity</Col>
              <Col>{i.quantity}</Col>
              <Col>
                <div className="d-flex flex-column ">
                  <Button className="mb-4" onClick={()=>oninc(i.id)}>increase</Button>
                  <Button onClick ={()=>decCartItem(i.id)}>decrease</Button>
                </div>
              </Col>
              <Col><Button>Delete</Button></Col>
            </Row>)
          })}
        </Col>
        <Col className="cartDetails p-4 m-4">
          <div>
            <h5>Enter promo code</h5>
            <div className="d-flex justify-content-between w-md-50 w-xl-50 mb-2">
              <textarea></textarea>
              <Button type="submit" style={{ backgroundColor: "#FFC747" }}>
                Submit
              </Button>
            </div>
            <h5>Promotions</h5>
            <p>Free shipping on orders Rs500+</p>
            <hr />
            <div>
              <span>Subtotal</span>
              <span>34</span>
              <br />
              <span>Shipping Cost</span>
              <span>0</span>
              <br />
              <span>Discount</span>
              <span>0</span>
              <br />
              <spa>Total</spa>
              <span>34</span>
            </div>
            <div className="d-flex">

              <Link to='/wallet'><Button>checkout</Button></Link>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default CartItem;
