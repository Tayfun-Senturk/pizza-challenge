import React from 'react';
import '../index.css';

const Extras = () => {

    const materials = [
        'Pepperoni',
        'Sosis',
        'Domates',
        'Biber',
        'Mısır',
        'Sucuk',
        'Kanada Jambonu',
        'Ananas',
        'Tavuk Izgara',
        'Jalepeno',
        'Kabak',
        'Soğan',
        'Sarımsak',
      ]

      const extra= (mat)=> {
        return (
             <>
                <input type='checkbox' id={mat} name={mat} value={mat} className='checkboxes' ></input>
                <label htmlFor={mat}>{mat}</label>
             </>
            )
       

      }

  return (
    <>
    <div className='radio'>
    <h3>Ek Malzemeler</h3>
    <p>En Fazla 10 malzeme seçebilirsiniz 5₺</p>
    <div className='extras'>
        {materials.map(extra)}
    </div>
    </div>
    </>
  );
};

export default Extras;