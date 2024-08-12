import React from 'react';
import '../index.css';

const Hamur = () => {
  return (
    <>
    <div className='drop'>
    <h3>Hamur Seç<span style={{ color: 'red' }}> *</span></h3>
    <div className='Hamurmenu'>
                <select name="hamur" id="hamur">
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
        </div>
    </div>
    </>
  );
};

export default Hamur;