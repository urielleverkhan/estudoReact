import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Midias fb={props.facebook} />
        </div>
    );
}

const Sobre = (props) =>{
    return(
        <div>
            <h2>Ola sou a(o) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Midias = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a>Youtube</a>
            <a>Instagran</a>
        </div>
    );
}
function App(){
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Naira" cargo="Progamadora" idade="16" facebook="http://www.google.com.br"/>
            <Equipe nome="Sergio" cargo="Progamador" idade="40"/>
        </div>
    );
}
export default App;