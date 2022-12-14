import React from "react";
import '../css/botonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear'>
        {props.children}
    </div>
);

export default BotonClear;