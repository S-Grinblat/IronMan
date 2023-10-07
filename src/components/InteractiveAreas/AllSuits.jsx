import React from 'react';
import './suitsFoulderCSS/Suits.css'
const AllSuits = ({ Suits }) => {
  return (
    <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Suits.map((Suit, index) => (
        <div key={Suit.id} className='py-3 px-2 w-[320px] hover:shadow-[#ccc] shadow-inner transition-all rounded-xl'>
          <img src={Suit.imagen} alt={Suit.nombre} className='img'/>
          <p className='text-gray-600 text-center'>{Suit.descripcion}</p> 
        </div>
      ))}
    </div>
  );
}

export { AllSuits };
