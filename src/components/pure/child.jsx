import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef("");
    const nameRef = useRef("");

    const pressButton = () =>{
        const text = messageRef.current.value;
        alert(`Text input: ${text} `);
    }

    const pressButtonParams = (text) => {
        alert(`Text: ${text}`);
    }

    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{backgroundColor: "cyan", padding: "30px"}}>
            <p onMouseOver={ () => console.log("On  Mouse Over")}>Hello, {name}</p>
            <button onClick={ () => console.log("Pressed Button 1")}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams("Hola")}>Button 3</button>
            <input placeholder='Insert a text' 
            onFocus={() => console.log("Input focused")} 
            onChange={(e) => console.log("Input change: ",e.target.value)} 
            onCopy={() => console.log("Copied text from input")}
            ref={messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop: "20px"}}>
                <form onSubmit={submitName}>
                    <input placeholder="New name" ref={nameRef}/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
