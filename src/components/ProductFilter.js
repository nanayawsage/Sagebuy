import React, { useState } from 'react';
import PRODUCTS from '../db/data';
import Products from '../products/Products';

const ProductFilter = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue);

    // Filter products based on the search query
    const filtered = PRODUCTS.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Product Filter</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Products key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
