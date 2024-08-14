import React from 'react';
import '../index.css';

const Name = ({onChange}) => {
    return (
      <div>
        <h3>İsim</h3>
        <input 
        type='text'
          name='isim' 
          onChange={onChange}
          placeholder='İsminizi giriniz.' >
        </input>
      </div>
    );
  };
  
  export default Name;