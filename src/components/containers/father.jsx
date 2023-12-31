import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState("Martin");

    const showMessage = (text) => {
        alert(`Message received: ${text}`)
    } 

    const updateName = (newName) => {
        setName(newName)
    }

    return (
        <div style={{backgroundColor: "tomato", padding: "10px"}}>
            <Child name={name} send={showMessage} update={updateName} />
        </div>
    );
}

export default Father;
