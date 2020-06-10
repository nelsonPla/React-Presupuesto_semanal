import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid';
import PropType from 'prop-types'

const Formulario = ({ guardarGasto, guardarCrearGasto, restante }) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);


    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        if(cantidad > restante) {
            guardarError(true);
            return;
        }

        guardarError(false);

        //construir el gasto
        const gasto = {
            nombre: nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto no es correcto" /> : null }

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt( e.target.value), 10)}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto" 
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropType.func.isRequired,
    guardarCrearGasto: PropType.func.isRequired,
    restante: PropType.number.isRequired
}
 
export default Formulario;