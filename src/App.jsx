import React, { useState } from 'react';
import Form from './components/Form';

const App = () => {

  const initialData = { isim: '' };
  const [data, setData] = useState(initialData);
  const [extras, setExtras] = useState([])
  const [quantity,setQuantity] = useState(1)

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      if(checked){
        setExtras(prevExtras => [...prevExtras, value]);
      }else {
        setExtras(prevExtras => prevExtras.filter((a) => a !== value));
      }
      
    } else if (event.target.name==="adet"){
      if(event.target.id==="increase"){
        setQuantity(quantity+1)
      }else if (quantity>1){
        setQuantity(quantity-1)
      }
    }else {
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  
    console.log(data);
    console.log(extras)
  };

  return (
    <>
      <Form onChange={handleChange} quantity={quantity} extras={extras} data={data}/>
    </>
  );
};

export default App;
