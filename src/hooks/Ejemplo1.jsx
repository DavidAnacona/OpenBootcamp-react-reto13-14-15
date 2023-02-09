/** 
 * Ejemplo de uso del Hook useState
 * 
 * Crear componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    //Valor inical
    const valorInicial = 0;

    //valor inicial para una persona 
    const personaInicial = {
        nombre: "Martin",
        email: "martin@gmail.com",
        numero: 0
    }

    /** 
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente 
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador 
     */
    const incrementarContador = () =>{
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado de persona en el componente 
     */
    const actualizarPersona = () =>{
        setPersona(
            {
                nombre: "David",
                email: "david@gmail.com",
                numero: persona.numero + 1
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>contador: {contador}</h2>
            <h2>Datos de la persona: </h2>
            <h3>nombre: {persona.nombre}</h3>
            <h3>email: {persona.email}</h3>
            {/**Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar personar</button>
            </div>

        </div>
    );
}

export default Ejemplo1;
