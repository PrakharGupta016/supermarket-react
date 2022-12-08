
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UncontrolledExample from "../components/Carousel/Carousel";
import NavBar from "../components/Navbar/NavBar";
import ProductItem from "../components/ProductItem/ProductItem";


const ProductDetails = () => {
  
const params = useParams()
const id = params.id;

  return (
    <div>
      
        <NavBar/>
       {/* <UncontrolledExample/> */}
        <ProductItem id={id}/>
      
    </div>
  )
}

export default ProductDetails;
