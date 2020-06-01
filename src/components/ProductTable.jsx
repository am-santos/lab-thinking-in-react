import React from 'react';
import './ProductTable.css';

import ProductRow from './ProductRow';

const ProductTable = props => {
  const products = props.filteredProducts;
  console.log('products', products);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
