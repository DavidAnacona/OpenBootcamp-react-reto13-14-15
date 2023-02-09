/**
 * Ejemplo de uso de: 
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //  Vamos  a crear dos contadores distintos cada uno en un estado distinto

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef para asociar una variable con elemento del DOM
    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 + 1)
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1)
    }

    /** 
     * Trabjando con useEffect
     */

    /**
     * Caso 1: Ejecutar SIEMPRE un snipet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    /**useEffect(() => {
        console.log("Cambio en el estado del componente");
        console.log("Mostrando Referencia a elemento del DOM");
        console.log(miRef);
    }, );
    */

    /**
     * Caso 2: Ejecutar SOLO cuando cambie contador1
     * Cada vez que haya un cambio en el contador 1, se ejecutara lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecución del useEffect()
     */
    
    /* useEffect(() => {
        console.log("Cambio en el estado del contador1");
        console.log("Mostrando Referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1]);
    */

    /**
     * Caso 3: Ejecutar SOLO cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en el contador 1, se ejecutara lo que diga el useEffect()
     * En caso de que cambie contador2, tambien se va a ejecutar
     */

    useEffect(() => {
        console.log("Cambio en el estado del contador1y en el contador2");
        console.log("Mostrando Referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect() </h1>
            <h2>contador: {contador1}</h2>
            <h2>contador: {contador2}</h2>
            {/**Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/**Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;