import React from 'react';
import '../index.css';

const SizeSelection = () => {
  return (
    <>
    <div className='radio'>
    <h3>Boyut Seç<span style={{ color: 'red' }}> *</span></h3>
    <div className='SizeSelector'>
            <input type="radio" name="size" id="small" value="Küçük" required />
            <label htmlFor="small">Küçük</label>
        </div>
        <div className='SizeSelector'>
            <input type="radio" name="size" id="medium" value="Orta" required  />
            <label htmlFor="medium">Orta</label>
        </div>
        <div className='SizeSelector'>
            <input type="radio" name="size" id="large" value="Büyük" required />
            <label htmlFor="large">Büyük</label>
        </div>
    </div>
    </>
  );
};

export default SizeSelection;