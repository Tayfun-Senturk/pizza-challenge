import React from 'react';
import '../index.css';

const QuantitySelector = ({onChange,quantity}) => {
    return (
      <div className='quantities'>
        <button className='quantity' type='button' onClick={onChange} name='adet' id='reduce'>-</button>
        <span className='adet'>{quantity}</span>
        <button data-cy="increase" className='quantity' type='button' onClick={onChange} name='adet' id='increase'>+</button>
      </div>
    );
  };
  
  export default QuantitySelector;