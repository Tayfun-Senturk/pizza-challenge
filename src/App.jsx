import React, { useEffect, useState } from 'react';
import Form from './pages/Form';
import Home from './pages/Home';
import Success from './pages/Success';
import './index.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const history = useHistory();
  const initialData = { isim: '' };
  const [data, setData] = useState(initialData);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);



  const handleChange = (event) => {
    const { name, type, value, checked, id } = event.target;

    if (type === 'checkbox') {
      if (checked) {
        setExtras((prevExtras) => [...prevExtras, value]);
      } else {
        setExtras((prevExtras) => prevExtras.filter((a) => a !== value));
      }
    } else if (name === 'adet') {
      if (id === 'increase') {
        setQuantity(quantity + 1);
      } else if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const Datas = {
      quantity,
      data,
      extras,
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', Datas);
      console.log('Order submitted successfully:', response.data);
      history.push('/success')
    } catch (error) {
      console.error('There was an error submitting the order:', error);
    }
  };


  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/form">
          <Form onSubmit={handleSubmit} onChange={handleChange} quantity={quantity} extras={extras} data={data} />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
  );
};

export default App;
