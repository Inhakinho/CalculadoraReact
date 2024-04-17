import React from 'react';
import '../styles/BotonClear.css';

const BotonClear = (props) => (
  <div 
    className= 'boton_clear' 
    onClick={props.manejarClear}>
      {props.children}
  </div>
);

export default BotonClear;