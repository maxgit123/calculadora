import React from "react";
import '../css/boton.css';

function Boton(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	};

	return (
		<div
			className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
			{props.children}
		</div>
	);
}

export default Boton;