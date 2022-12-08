import { useEffect } from "react";
import './productRow.css'
const ProductRow = ({name,description,price}) => {
    
    return (
      <div className="row product">
        <div className="col-md-2">
          <img src="#" alt="Sample Image" height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className="col-md-2 product-price">
          {price}
        </div>
      </div>
    );
  }
  
  export default ProductRow;