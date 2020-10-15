import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>Ola sou a {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
            </div>
        );
    }
}
function App(){
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Naira" cargo="programadora"/>
            
        </div>
    );
}
export default App;