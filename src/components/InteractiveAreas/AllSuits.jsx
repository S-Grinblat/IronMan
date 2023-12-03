import React from 'react';
import './suitsFoulderCSS/Suits.css'
const AllSuits = ({ Suits }) => {
  return (
    <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Suits.map((Suit, index) => (
        <div key={Suit.id} className='py-3 px-2 w-[320px] hover:shadow-[#ccc] shadow-inner transition-all rounded-xl relative group'>
          <img src={Suit.imagen} loading="lazy" alt={Suit.nombre} className='img w-full h-auto group-hover:blur-md transition duration-300'/>
          <div class="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
            <p className='text-center px-3'>{Suit.descripcion}</p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export { AllSuits };
