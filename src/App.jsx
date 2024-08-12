import React from 'react';

import Header from './components/Header';
import PizzaDetail from './components/Pizzadetail';
import SizeSelection from './components/SizeSelection';
import Hamur from './components/Hamur';
import Extras from './components/Extras';
import OrderNote from './components/OrderNote';


const App = () => {
  return (
    <>
      <Header />
      <PizzaDetail/>
      <SizeSelection/>
      <Hamur/>
      <Extras/>
      <OrderNote/>
    </>
  );
};

export default App;
