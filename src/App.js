import './App.css';
import logoCalculadora from './img/logo.png';
import Boton from './componentes/boton';

function App() {
	return (
		<div className='App'>
			<div className='contenedor-logo'>
				<img
					src={logoCalculadora}
					className='logo'
					alt='Logo de calculadora' />
			</div>
			<div className='contenedor-calculadora'>
				<div className='fila'>
					<Boton>1</Boton>
					<Boton>+</Boton>
				</div>
				<div className='fila'></div>
				<div className='fila'></div>
				<div className='fila'></div>
				<div className='fila'></div>
			</div>
		</div>
	);
}

export default App;
