import React from 'react';

function ProductRow({ product }) {
  const { name, price, inStock } = product;
  const rowStyle = {
    color: inStock ? 'black' : 'red',
  };

  return (
    <tr style={rowStyle}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
