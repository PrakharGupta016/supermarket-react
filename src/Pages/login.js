import React from "react";
import { Link } from "react-router-dom";
import CustomForm from "../components/Form/Form";
import NavBar from "../components/Navbar/NavBar";

const Login = () => {
  return (
    <div>
         <NavBar/>
         <div className=" mx-auto w-25 p-4  ">
             <CustomForm/>
             <p className="mt-4 d-flex justify-content-center">New User</p>
             <Link className="d-flex justify-content-center" to="/signup">SIGNUP</Link>
             
         </div>
         
    </div>
  );
};

export default Login;
