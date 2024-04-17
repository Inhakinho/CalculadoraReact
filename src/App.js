import './App.css';
import logo_plexus from './images/logoplexus.png'
import Boton from './components/Boton.jsx';
import Pantalla from './components/Pantalla.jsx';
import BotonClear from './components/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (val === 'x') {
      setInput(input + '*');
    }
    else if(val === '%'){
      setInput(input + '/');
    } 
    else{
      setInput(input + val);
    }
  };

  const calcularResultado = ()=>{
    if (input){
      try {
        setInput(evaluate(input).toString());
      } catch (error) {
        alert("Error al calcular el resultado");
      }
    } else {
      alert("Ingrese valores para calcular");
    }
  };

  return (
    <div className='App'>
      <div className='contenedor_logoplexus'>
        <img
        className='logo_plexus'
        src={logo_plexus}
        alt="Logotipo de Plexus" />
      </div>
      <div className='contenedor_calculadora'>
      <Pantalla input={input} />
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>x</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>%</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>
          CLS
        </BotonClear>
      </div>
      </div>
    </div>
  );
}

export default App;
