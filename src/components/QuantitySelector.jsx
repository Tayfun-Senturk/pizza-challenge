import React from 'react';
import '../index.css';

const QuantitySelector = ({onChange,quantity}) => {
    return (
      <div>
        <button type='button' onClick={onChange} name='adet' id='reduce'>-</button>
        <span>{quantity}</span>
        <button type='button' onClick={onChange} name='adet' id='increase'>+</button>
      </div>
    );
  };
  
  export default QuantitySelector;