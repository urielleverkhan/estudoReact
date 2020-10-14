import React from 'react';


const Bemvindo = (props) => {
    return(
        <div>
            <h2>Bem vindo {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}
function App(){
    return (
        <div>
            <h1>Ola Mundo</h1>
            <Bemvindo nome="Naira" idade="17" />
            <Bemvindo nome="Sergio" idade="40"/>
        </div>
    );
}
export default App;