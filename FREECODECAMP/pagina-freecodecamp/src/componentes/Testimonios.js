import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/python-${props.imagen}.jpg`)}
      alt={props.name} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'> 
        {props.cargo} en <strong>{props.empresa}</strong> 
        </p>
        <p className='texto-testimonio'> "{props.testimonio}"</p>
        <p className='text-freecodecamp'> <strong>free code camp</strong> </p>
      </div>
    </div>
  );
}

export default Testimonio;