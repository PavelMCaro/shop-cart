import React, { Component } from 'react';
import { Page } from './index';

export class PageContainer extends Component {

  state = {
    productsArray: []
  }

  addProducts = (product) => {
    console.log('product', product);
    const { productsArray } = this.state;

    if(productsArray.length > 0) {
        const filter = productsArray.filter(e => e.id == product.id);
/*         const diferents = productsArray.filter(e => e.id !== product.id);
        console.log('diferents>>>', diferents);
        this.setState({ productsArray: diferents }) */
        if (filter.length > 0) {
          productsArray.map(e => {
            if(e.id == product.id) {
              e.count++;
            }
          });
          this.setState({ ... productsArray });
        }
        if(filter.length == 0) {
          productsArray.push(product);
          this.setState({ ... productsArray });
        }
    } else {
      productsArray.push(product);
      this.setState({ ... productsArray });
    }
  }

  render() {
    const { productsArray } = this.state;

    console.log('array', productsArray);
    return (
      <>
        <Page
          addProducts={this.addProducts}
          productsArray={productsArray}
        />
        {productsArray.length > 0 &&
          <>
          <div>CARRITO DE COMPRAS</div>
          {
            productsArray.map((obj,index) =>
            <p key={index}>PRODUCTO: {obj.name}  -  CANTIDAD: {obj.count}</p>
            )
          }
          </>
        }
      </>
    )
  }
}
