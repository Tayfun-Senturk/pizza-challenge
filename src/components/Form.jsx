import React from 'react';

import Header from './Header';
import PizzaDetail from './Pizzadetail';
import SizeSelection from './SizeSelection';
import Hamur from './Hamur';
import Extras from './Extras';
import OrderNote from './OrderNote';
import QuantitySelector from './QuantitySelector';
import OrderSummary from './OrderSummary';
import Name from './Name';

const Form = ({ onChange,quantity,extras }) => {
  return (
    <>
    <form>
      <Header />
      <PizzaDetail onChange={onChange} />
      <SizeSelection onChange={onChange} />
      <Hamur onChange={onChange} />
      <Extras onChange={onChange} extras={extras}/>
      <Name onChange={onChange} />
      <OrderNote onChange={onChange} />
      <QuantitySelector onChange={onChange} quantity={quantity} />
      <OrderSummary onChange={onChange} />
      </form>
    </>
  );
};

export default Form;
