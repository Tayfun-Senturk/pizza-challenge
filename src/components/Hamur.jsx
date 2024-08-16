import React from 'react';
import '../index.css';

const Hamur = ({ onChange,data}) => {
  return (
    <>
      <div className='drop'>
        <h3>Hamur Seç<span style={{ color: 'red' }}> *</span></h3>
        <div className='Hamurmenu'>
          <select data-cy="hamur" name="hamur" id="hamur" required value={data.hamur} onChange={onChange}>
          <option value="" disabled selected>Hamur kalınlığını seçiniz!</option>
            <option  value="ince">İnce</option>
            <option data-cy="normalhamur" value="normal">Normal</option>
            <option value="kalın">Kalın</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Hamur;
