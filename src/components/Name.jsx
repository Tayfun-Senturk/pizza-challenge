import React from 'react';
import '../index.css';

const Name = ({onChange,data}) => {
    return (
      <div>
        <h3>İsim</h3>
        <input 
        type='text'
          name='isim' 
          value={data.isim}
          onChange={onChange}
          placeholder='İsminizi giriniz.'
          required >
        </input>
      </div>
    );
  };
  
  export default Name;