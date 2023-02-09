/**
 * Ejemplo Hooks: 
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * Componente 1 
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre 
 */

//Iniciamos un estaod vacio que va a rellenarse con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/**Pintamos el componente 2 */}
            <Componente2 />
        </div>
        
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: "123456",
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSessionData(
            {
                token: "JWT123456",
                sesion: sessionData.sesion + 1
            }
        )
    }
     
    return(
        <miContexto.Provider value={sessionData}>
        {/** Todo lo que este adentro puede leer los datos de SessionData */}
        {/** Además, si se actualiza, los componentes de aqui, tambien lo actualizan */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}


