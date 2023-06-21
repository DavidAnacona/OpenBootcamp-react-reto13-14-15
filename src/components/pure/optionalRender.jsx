import React,{useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: "white",
    fontWeight: "bold"
}


//Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: "bold"
}

//Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) =>{
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) =>{
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion verdadera) && expresion => se renderiza la expresión
// ? (Expresion false) && expresión => no se renderiza la expresión

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);
    
    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1);
    }

    return (
        <div>

            { optionalButton }

            {/** N Messagges unread
            {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}

            {/** Ternary Operator */}
            {access ? (
                <div>{nMessages > 0
                ? 
                <p>You have {nMessages} new message{nMessages > 1 ? "s" : null}...</p>
                :
                <p>There are no new messages</p>
                }
                <button onClick={addMessages}>{nMessages === 0 ? "Add your first message" : "Add new message"}</button>
                </div>
            ): null }
            
            
        </div>
    );
}

export default OptionalRender;
