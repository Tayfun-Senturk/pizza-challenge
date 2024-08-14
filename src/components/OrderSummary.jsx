import React from 'react';
import '../index.css';

const OrderSummary = () => {
    return (
      <div>
        <h3>Sipariş Toplamı</h3>
        <div>
            <span>Seçimler</span><span>25.00tl</span>
            <span>Toplam</span><span>110.50tl</span>
    
        </div>
        <button type='submit' id='siparişver'>SİPARİŞ VER</button>
      </div>
    );
  };
  
  export default OrderSummary;