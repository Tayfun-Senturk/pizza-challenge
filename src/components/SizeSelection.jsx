import React from 'react';
import '../index.css';

const SizeSelection = ({onChange}) => {
  return (
    <>
    <div className='radio'>
    <h3>Boyut Seç<span style={{ color: 'red' }}> *</span></h3>
    <div className='SizeSelector'>
            <input type="radio" name="size" id="small" value="Küçük" onChange={onChange} required />
            <label htmlFor="small">Küçük</label>
        </div>
        <div className='SizeSelector'>
            <input type="radio" name="size" id="medium" value="Orta" onChange={onChange} required  />
            <label htmlFor="medium">Orta</label>
        </div>
        <div className='SizeSelector'>
            <input type="radio" name="size" id="large" value="Büyük" onChange={onChange} required />
            <label htmlFor="large">Büyük</label>
        </div>
    </div>
    </>
  );
};

export default SizeSelection;