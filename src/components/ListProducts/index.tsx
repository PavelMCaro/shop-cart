import React from 'react';
import { productsData } from './data';
import { Products } from '../Products';

export const ListProducts = (props) => (
  <div className="listproducts">
    {productsData.map((obj, index) =>
      <Products key={index} product={obj} addProducts={props.addProducts} />
    )
    }
  </div>
)
