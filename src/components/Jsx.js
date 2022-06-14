import React, {Fragment, useState} from 'react'

const Jsx = () => {

    // const saludo = 'Hola JSX'
    const temperatura = 21;

    return ( 
        <Fragment>
            <h2>Frío o Calor: La temperatura es {temperatura}</h2>
            <h4>
                {
                    temperatura > 20 ? 'Hace Calor' : 'Hace Frío' //esto es un if en javascript en una sola linea
                }
            </h4>
        </Fragment>
     );
}
 
export default Jsx;