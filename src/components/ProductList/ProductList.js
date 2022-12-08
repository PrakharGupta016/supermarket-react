import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductRow from './ProductRow';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state={
      products :[]
    };
  }
  componentDidMount(){


        fetch('http://localhost:8080/api/product/',{
            method:'GET'
        }).then((res)=>res.json()).then(data=>this.setState({ products: data }))
    
  }
  render() {
    return (
      <div className="container main-content">
       {
        this.state.products.map(product => {

          return <Link to={`/product-details/${product.id}`}  style={{ textDecoration: 'none',color:'black'}}><ProductRow key={product.id} image='#' name={product.name} description={product.description} price={product.salePrice}  /></Link>
        })
       }

      </div>
    );
  }
}

export default ProductList;
