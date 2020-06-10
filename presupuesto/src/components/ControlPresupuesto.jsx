import React, { Fragment } from 'react'
import { revisarPresupuesto } from '../helpers';
import PropType from 'prop-types'


const ControlPresupuesto = ({ presupuesto, restante }) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.protoTypes = {
    presupuesto: PropType.number.isRequired,
    restante: PropType.number.isRequired
}
 
export default ControlPresupuesto;