import React from 'react';

export const Products = (props) => {

  const { product, addProducts } = props;

  return (
    <div className="products">
      <p className="text-01">{product.name}</p>
      <p className="text-02">{product.description}</p>
      <p className="text-02">{product.price}</p>
      <p className="text-02">{product.stock}</p>
      <button className="products__button" onClick={() => addProducts(product)}>AÑADIR</button>
    </div>
  )
}
