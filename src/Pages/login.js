import React from "react";
import { Link } from "react-router-dom";
import CustomForm from "../components/SignInForm/SignInForm";
import NavBar from "../components/Navbar/NavBar";
import SignInForm from "../components/SignInForm/SignInForm";

const Login = () => {
  return (
    <div>
         <NavBar/>
         <div className=" mx-auto w-25 p-4  ">
             <SignInForm/>
             <p className="mt-4 d-flex justify-content-center">New User</p>
             <Link className="d-flex justify-content-center" to="/signup">SIGNUP</Link>
             
         </div>
         
    </div>
  );
};

export default Login;
