import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //Breve introduccion a useState
    //const [variable, metodo para actualizarla] = useState(valor inicial)
    const [age, setAge] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hola {props.name} desde un componente funcional</h1>
            <h2>Tu edad es de {age}</h2>
        <div>
            <button onClick={birthday}>Cumplir años</button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;