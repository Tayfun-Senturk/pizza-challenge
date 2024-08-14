import React from 'react';
import '../index.css';

const OrderSummary = ({extras,quantity,data}) => {
    return (
      <div className='toplam'>
        <h3>Sipariş Toplamı</h3>
        <div className='ücret'>
            <span style={{fontWeight:"bold",color:"#d32f2f"}}>Seçimler = {(extras.length*5)*quantity}</span>
            <span>Toplam = {(85.50+(extras.length*5))*quantity}</span>
    
        </div>
        <button className='order' type='submit' id='siparişver' disabled={data.isim.length<3||extras.length<4}  >SİPARİŞ VER</button>
      </div>
    );
  };
  
  export default OrderSummary;