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

const Form = ({ onChange,quantity,extras,data }) => {
  return (
    <>
    <form>
      <Header />
      <PizzaDetail onChange={onChange} data={data} />
      <SizeSelection onChange={onChange} data={data} />
      <Hamur onChange={onChange} data={data} />
      <Extras onChange={onChange} extras={extras} data={data}/>
      <Name onChange={onChange}  data={data}/>
      <OrderNote onChange={onChange} data={data} />
      <QuantitySelector onChange={onChange} quantity={quantity} data={data} />
      <OrderSummary onChange={onChange} extras={extras} quantity={quantity} data={data} />
      </form>
    </>
  );
};

export default Form;
