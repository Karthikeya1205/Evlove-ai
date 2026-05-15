import React from 'react';

const products = [
  { name: 'Pre-Workout Boost', price: '$29.99', emoji: '⚡' },
  { name: 'Protein Powder', price: '$45.50', emoji: '🥤' },
  { name: 'Resistance Bands', price: '$19.99', emoji: '🏋️' },
  { name: 'Smart Water Bottle', price: '$59.99', emoji: '💧' },
];

const ShopScreen = () => (
  <div className="screen" id="shop-screen">
    <header className="shop-header">
      <div className="shop-logo">Evolve AI</div>
      <div className="cart-icon">🛒</div>
    </header>
    <h1 className="shop-title">Fuel Your Evolution</h1>
    <div className="product-grid">
      {products.map((product, i) => (
        <div key={i} className="product-card">
          <div className="product-image-placeholder">{product.emoji}</div>
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-btn" id={`add-cart-${i}`}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default ShopScreen;