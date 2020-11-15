import React from 'react';
import { ListProducts } from '../ListProducts';

export const Page = (props) => (
  <div className="page-c">
    <ListProducts addProducts={props.addProducts} />
    {/* <CartShop productsArray={props.productsArray}/> */}
  </div>
);
