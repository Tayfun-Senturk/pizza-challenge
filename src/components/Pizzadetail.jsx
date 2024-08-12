import React from 'react';
import '../index.css';

const PizzaDetail = () => {
  return (
    <div className="product-details">
      <h2 className="product-title">Position Absolute Acı Pizza</h2>
      <div className="product-price-rating">
        <span className="product-price">85.50₺</span>
        <span className="product-rating">4.8 <span className="rating-count">(1200)</span></span>
      </div>
      <p className="product-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam incidunt impedit, ipsum sapiente eaque unde maiores numquam sequi. Similique ducimus totam, doloribus recusandae provident dolore non praesentium officiis accusamus impedit? Nemo aliquid sapiente reprehenderit ad pariatur error nobis vel!
      </p>
    </div>
  );
};

export default PizzaDetail;