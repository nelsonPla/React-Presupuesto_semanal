import React from 'react';

const Error = ({mensaje}) => ( //ya que no tendra mas que el return podemos dejar la funcion de flecha así
    <p className = "alert alert-danger error"> 
    	{ mensaje } 
    </p>
);

export default Error;