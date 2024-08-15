import React from 'react';
import '../index.css';
import Header from '../components/Header';
import PizzaDetail from '../components/Pizzadetail';
import SizeSelection from '../components/SizeSelection';
import Hamur from '../components/Hamur';
import Extras from '../components/Extras';
import OrderNote from '../components/OrderNote';
import QuantitySelector from '../components/QuantitySelector';
import OrderSummary from '../components/OrderSummary';
import Name from '../components/Name';

const Form = ({ onChange,quantity,extras,data,onSubmit}) => {

  return (
    <>
    <form onSubmit={onSubmit} className='form'>
      <Header />
      <div className='body'>
      <PizzaDetail onChange={onChange} data={data} />
      <div className='size'>
      <SizeSelection onChange={onChange} data={data} />
      <Hamur onChange={onChange} data={data} />
      </div>
      <Extras onChange={onChange} extras={extras} data={data}/>
      <Name onChange={onChange}  data={data}/>
      <OrderNote onChange={onChange} data={data} />
      <div className='summary'>
      <QuantitySelector onChange={onChange} quantity={quantity} data={data} />
      <OrderSummary onChange={onChange} extras={extras} quantity={quantity} data={data} />
      </div>
      </div>
      </form>
    </>
  );
};

export default Form;
