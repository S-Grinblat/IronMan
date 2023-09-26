import armaduras from '../layouts/strakLife/data/data.json'
import { useState } from 'react';

const IronManArmors = ({ armaduras }) => {
  const [imagenActual, setImagenActual] = useState(0);

  const arrowLeft = () => {
    if (imagenActual > 0) {
      setImagenActual(imagenActual - 2); // Retrocede dos imágenes
    }
  };

  const arrowRight = () => {
    if (imagenActual < armaduras.length - 2) {
      setImagenActual(imagenActual + 2); // Avanza dos imágenes
    }
  };

  return (
    <section className="pt-8" id="Armors">
      <h2 className="title">Armors</h2>
      <p className="text-gray-400 text-lg text-center">Let's take a quick look at Mr. Stark's most iconic armor.</p>
      <div className="px-4 overflow-x-auto">
        <div className="flex space-x-8 justify-center items-center">
          <button onClick={arrowLeft}>
            <svg className="icon icon-tabler" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="#999" fill="#55d" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path className="cursor-pointer" d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="#ffc619"></path>
            </svg>
          </button>
          {armaduras
            .slice(imagenActual, imagenActual + 2)
            .map((armadura, index) => (
              <div key={index} className="flex-shrink-0 w-[290px]">
                <img src={armadura.imagen} alt={armadura.nombre} className="w-full h-auto p-2" />
                <p className="text-gray-400 text-lg text-center">{armadura.descripcion}</p>
              </div>
            ))}
          <button onClick={arrowRight}>
            <svg className="icon icon-tabler" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="#999" fill="#55d" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path className="cursor-pointer" d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="#ffc619"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export {IronManArmors};











// import armadurasData from '../layouts/strakLife/data/data.json'
// import { useState } from 'react';
// const IronManArmors = ({ Armaduras }) => {

//   const [imagenActual, setImagenActual] = useState(0);

//   const armaduras = armadurasData.armaduras; 

//   const arrowLeft = () => {
//     if (imagenActual > 1) {
//       setImagenActual(imagenActual - 1);
//     }
//   };

//   const arrowRight = () => {
//     if (imagenActual < armaduras.length - 1) {
//       setImagenActual(imagenActual + 1);
//     }
//   };

//   return (
//     <section className="pt-8" id="Armors">
//   <h2 className="title">Armors</h2>
//   <p className="text-gray-400 text-lg text-center">Let's take a quick look at Mr. Stark's most iconic armor.</p>
//   <div className="px-4 overflow-x-auto">
//     <div className="flex space-x-8 justify-center items-center">
//       <button onClick={arrowLeft}>
//         <svg className="icon icon-tabler" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="#999" fill="#55d" strokeLinecap="round" strokeLinejoin="round">
//           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//           <path className="cursor-pointer" d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" strokeWidth="0" fill="#ffc619"></path>
//         </svg>
//       </button>
//       {Armaduras
//         .slice(imagenActual, imagenActual + 2) // Mostrar las siguientes dos armaduras
//         .map((armadura, index) => (
//           <div key={index} className="flex-shrink-0 w-[290px]">
//             <img src={armadura.imagen} alt={armadura.nombre} className="w-full h-auto p-2" />
//             <p className="text-gray-400 text-lg text-center">{armadura.descripcion}</p>
//           </div>
//         ))}
//       <button onClick={arrowRight}>
//         <svg className="icon icon-tabler" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="#999" fill="#55d" strokeLinecap="round" strokeLinejoin="round">
//           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//           <path className="cursor-pointer" d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="#ffc619"></path>
//         </svg>
//       </button>
//     </div>
//   </div>
// </section>

//   );
// };

// export {IronManArmors} 
