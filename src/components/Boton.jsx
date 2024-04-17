import React from 'react';
import '../styles/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !=='.') && (valor !== '=');
  };
  
// Agregar una clase "resultado" si el botón es igual
const buttonClass = esOperador(props.children) ? 'operador' : props.children === '=' ? 'resultado' : '';

return (
  <div
    className={`boton_contenedor ${buttonClass}`}
    onClick={() => props.manejarClic(props.children)}
  >
    {props.children}
  </div>
  );
};

export default Boton;