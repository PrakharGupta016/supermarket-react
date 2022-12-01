
import { Carousel } from "react-bootstrap";
import UncontrolledExample from "../components/Carousel/Carousel";
import NavBar from "../components/Navbar/NavBar";
import ProductItem from "../components/ProductItem/ProductItem";


const ProductDetails = () => {
  return (
    <div>
        <NavBar/>
       {/* <UncontrolledExample/> */}
        <ProductItem/>
      
    </div>
  )
}

export default ProductDetails;
