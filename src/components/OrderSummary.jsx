import React from 'react';
import '../index.css';

const OrderSummary = ({extras,quantity,data}) => {
    return (
      <div>
        <h3>Sipariş Toplamı</h3>
        <div>
            <span>Seçimler</span><span>{(extras.length*5)*quantity}</span>
            <span>Toplam</span><span>{(85.50+(extras.length*5))*quantity}</span>
    
        </div>
        <button type='submit' id='siparişver' disabled={data.isim.length<3||extras.length<4}  >SİPARİŞ VER</button>
      </div>
    );
  };
  
  export default OrderSummary;