import React from 'react';
import '../index.css';

const Extras = ({onChange,extras}) => {

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
        "Zeytin",
        "Mozzarella"
      ]

      const extra= (mat)=> {
        return (
             <>
             <div className='mats'>
              <input data-cy={mat} type='checkbox' id={mat} name={mat} value={mat} key={mat} onChange={onChange} className='checkboxes' disabled={extras.length>=10 && !document.getElementById(mat).checked} checked={extras.includes(mat)} ></input>
              <label htmlFor={mat}>{mat}</label>
            </div>
             </>
            )
       

      }

  return (
    <>
    <div className='extras'>
    <h3>Ek Malzemeler</h3>
    <p>En Fazla 10 malzeme seçebilirsiniz 5₺</p>
    <div className='extras-checkboxes'>
        {materials.map(extra)}
    </div>
    {extras.length<4&&(
      <p style={{color: "red"}}>En az 4 malzeme seçmelisiniz.</p>
    )}
    </div>
    </>
  );
};

export default Extras;