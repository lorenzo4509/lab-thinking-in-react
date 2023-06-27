import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearch = (searchTerm) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  const handleCheckboxChange = (event) => {
    setShowOnlyInStock(event.target.checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} />
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Only show products in stock
      </label>
      <ProductTable products={products} showOnlyInStock={showOnlyInStock} />
    </div>
  );
}

export default ProductsPage;
