import React from 'react';
import '../index.css';

const OrderNote = () => {
    return (
      <div>
        <h3>Sipariş Notu</h3>
        <textarea 
          name='note' 
          placeholder='Siparişinize eklemek istediğiniz bir not var mı?' 
          rows="8" 
          cols="80">
        </textarea>
      </div>
    );
  };
  
  export default OrderNote;