import React from "react";
import CustomForm from "../components/Form/Form";
import NavBar from "../components/Navbar/NavBar";

const Login = () => {
  return (
    <div>
         <NavBar/>
         <div className=" mx-auto w-25 p-4  ">
             <CustomForm/>
             
         </div>
         
    </div>
  );
};

export default Login;
