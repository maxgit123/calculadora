import React from "react";
import '../css/boton.css';

function Boton(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	};

	return (
		<button
			className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
			onClick={() => props.manejarClic(props.children)}>
			{props.children}
		</button>
	);
}

export default Boton;