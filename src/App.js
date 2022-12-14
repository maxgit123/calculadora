import './App.css';
import logoCalculadora from './img/logo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import {useState} from 'react';

function App() {

	const [input, setInput] = useState('');

	const addInput = val => {
		setInput(input + val);
	};

	return (
		<div className='App'>
			<div className='contenedor-logo'>
				<img
					src={logoCalculadora}
					className='logo'
					alt='Logo de calculadora' />
			</div>
			<div className='contenedor-calculadora'>
				<Pantalla input={input}/>
				<div className='fila'>
					<Boton manejarClic={addInput}>7</Boton>
					<Boton manejarClic={addInput}>8</Boton>
					<Boton manejarClic={addInput}>9</Boton>
					<Boton manejarClic={addInput}>/</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={addInput}>4</Boton>
					<Boton manejarClic={addInput}>5</Boton>
					<Boton manejarClic={addInput}>6</Boton>
					<Boton manejarClic={addInput}>*</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={addInput}>1</Boton>
					<Boton manejarClic={addInput}>2</Boton>
					<Boton manejarClic={addInput}>3</Boton>
					<Boton manejarClic={addInput}>-</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={addInput}>=</Boton>
					<Boton manejarClic={addInput}>0</Boton>
					<Boton manejarClic={addInput}>.</Boton>
					<Boton manejarClic={addInput}>+</Boton>
				</div>
				<div className='fila'>
					<BotonClear manejarClear={() => setInput('')}>
						Borrar
					</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
