import React, { Fragment, useState } from 'react'
import PropType from 'prop-types'
import Error from './Error'

const Pregunta = ( {guardarPresupuesto, guardarRestante, actualizarPregunta} ) => {

    //definir el state
    const [ cantidad, guardarCantidad ] = useState(0);//iniciamos en 0 por que es una cantidad
    const [ error, guardarError ] = useState(false);


    //Funcion que va a leer el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value), 10)//le ponenos el 10 para que sea base 10
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN( cantidad )) {//isNaN es para preguntar si no es numero
            guardarError(true);
            return;
        }

        //que hacer si pasa la validación
        guardarError( false );

        guardarPresupuesto( cantidad );
        guardarRestante( cantidad );
        actualizarPregunta( false );

    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto que se a digitado es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto" 
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropType.func.isRequired,
    guardarRestante: PropType.func.isRequired,
    actualizarPregunta: PropType.func.isRequired
}
 
export default Pregunta;