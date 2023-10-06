// ProductView.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductView = ({ products }) => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = products.find((product) => product.id === id);

  if (!product) {
    // Product not found, display an error message or redirect
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: GH&#8373; {product.newPrice}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductView;
