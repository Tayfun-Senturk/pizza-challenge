import React from 'react';
import '../index.css';

const PizzaDetail = () => {
  return (
    <div className="pizza-details">
      <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
      <div className="pizza-price-rating">
        <span className="pizza-price">85.50₺</span>
        <span className="pizza-rating">4.8 <span className="rating-count">(1200)</span></span>
      </div>
      <p className="pizza-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam incidunt impedit, ipsum sapiente eaque unde maiores numquam sequi. Similique ducimus totam, doloribus recusandae provident dolore non praesentium officiis accusamus impedit? Nemo aliquid sapiente reprehenderit ad pariatur error nobis vel!
      </p>
    </div>
  );
};

export default PizzaDetail;