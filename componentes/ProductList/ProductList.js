import React, { Component } from 'react';
import data from './../../data/mock.json';

console.log(data);

class ProductList extends Component{
  render() {
    //const catalogo = data.catalog;
    return(
      <div>
        {
          data.catalog.map((prod) => {
            return <div className="ProductList" key={prod.id}>
            <img src={prod.imageURL}/>
            <h3>{prod.name}</h3>
            <p>$ {prod.price}</p>
            <button>Add to cart</button>
            </div>;
          })
        }
      </div>
    );
  }
}

export default ProductList;