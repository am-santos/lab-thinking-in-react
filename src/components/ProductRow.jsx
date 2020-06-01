import React from 'react';

const ProductTable = props => {
  return (
    <tr
      key={props.product.price}
      style={
        (props.product.stocked && { color: 'inherit' }) || { color: 'red' }
      }
    >
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductTable;
