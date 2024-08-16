import React from 'react';
import '../index.css';

const SizeSelection = ({onChange,data}) => {
  return (
    <>
    <div className='radio'>
    <h3>Boyut Seç<span style={{ color: 'red' }}> *</span></h3>
    <div className='SizeSelector'>
            <input checked={data.size==="Küçük"} type="radio" name="size" id="small" value="Küçük" onChange={onChange} required />
            <label htmlFor="small">Küçük</label>
        </div>
        <div className='SizeSelector'>
            <input checked={data.size==="Orta"} type="radio" name="size" id="medium" value="Orta" onChange={onChange} required  />
            <label htmlFor="medium">Orta</label>
        </div>
        <div className='SizeSelector'>
            <input data-cy="Büyük" checked={data.size==="Büyük"} type="radio" name="size" id="large" value="Büyük" onChange={onChange} required />
            <label htmlFor="large">Büyük</label>
        </div>
    </div>
    </>
  );
};

export default SizeSelection;