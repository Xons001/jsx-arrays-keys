import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] = useState([1,2,3,4,5])

    const agregarElemento = () => {
        console.log('click')
        setNumero([...arrayNumero, 6]) // Esto es para ampliar el array sin sobreescribirlo
        // sin los tres puntos juntaria todos los numeros sin recorrerlos uno por uno
    }

    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}> {item} - {index}</p>
                )
            }
        </Fragment>
     );
}
 
export default Lista;
