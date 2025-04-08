import React, { useState } from 'react';
import './ProductDropdown.css';

const products = [
  {
    id: 1,
    name: 'T-Shirts',
    image: 'https://d3d6kbc7r9kabj.cloudfront.net/appassets/product-tshirts/Preview/t-shirts-preview_V2.jpg?w=612&h=612'
  },
  {
    id: 2,
    name: 'Hoodies',
    image: 'https://d3d6kbc7r9kabj.cloudfront.net/appassets/product-hoodies/Preview/Hoodies-pullover_V3.jpg?w=612&h=612'
  },
  {
    id: 3,
    name: 'Mugs',
    image: 'https://d3d6kbc7r9kabj.cloudfront.net/appassets/product-accentmugs/CatalogPreviews/AccentMugBlue-1.jpg?w=612&h=612'
  }
];

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setIsOpen(false);
  };

  return (
    <div className="product-dropdown">
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedProduct.image} alt={selectedProduct.name} className="product-icon" />
        <span>{selectedProduct.name}</span>
        <span className="arrow">▼</span>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {products.map((product) => (
            <div
              key={product.id}
              className="dropdown-item"
              onClick={() => handleSelect(product)}
            >
              <img src={product.image} alt={product.name} className="product-icon" />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
