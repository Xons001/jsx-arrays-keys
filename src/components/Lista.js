import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])
    // Puedes utilizar todos los useState que necesites
    const [numero, setNumero] = useState(5)

    
    const agregarElemento = () => {
        console.log('click')

        setNumero(numero + 1)
        setArrayNumero([...arrayNumero, numero]) // Esto es para ampliar el array sin sobreescribirlo
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
                //Con este codigo recorres la array, el index siempre empieza por 0.
                //item es el contenido del array, lo recorre uno por uno
            }
        </Fragment>
     );
}
 
export default Lista;
