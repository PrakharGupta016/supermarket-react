import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Pages/login";
import ProductDetails from "./Pages/productdetails";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { ProductsProvider } from "./contexts/porductsContext";
import Checkout from "./components/Checkout/Checkout";
import CheckoutPage from "./Pages/CheckoutPage";
import AdminHome from "./Pages/AdminHome";
import AdminCategory from "./Pages/AdminCategory";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
      <App /> 
      {/* <Cart/> */}
      {/* <ProductDetails /> */}
        {/* <CheckoutPage/> */}
        {/* <AdminCategory/> */}
        {/* <AdminHome/> */}
      </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
