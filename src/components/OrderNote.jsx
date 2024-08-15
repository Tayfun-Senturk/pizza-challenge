import React from 'react';
import '../index.css';

const OrderNote = ({onChange}) => {
    return (
      <div className='orderNote'>
        <h3>Sipariş Notu</h3>
        <textarea 
          name='note' 
          onChange={onChange}
          placeholder='Siparişinize eklemek istediğiniz bir not var mı?' 
          rows="1" 
          cols="80">
        </textarea>
      </div>
    );
  };
  
  export default OrderNote;