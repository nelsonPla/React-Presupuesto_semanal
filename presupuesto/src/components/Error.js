import React from 'react';
import PropType from 'prop-types';

const Error = ({ mensaje }) => ( //ya que no tendra mas que el return podemos dejar la funcion de flecha así
    <
    p className = "alert alert-danger error" > { mensaje } <
    /p>
);

Error.protoTypes = {
    mensaje: PropType.string.isRequired
}

export default Error;