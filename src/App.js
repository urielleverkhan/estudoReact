import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Membro from './componentes/membro/Membro.js'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }
    entrar(){
        this.setState({status: true});
    }
    sair(){
        this.setState({status: false});
    }
    render(){
        return(
            <div>
               {this.state.status ?
                <div><h1> Bem vindo ao sistema</h1>
                <button onClick={this.sair}>Sair</button>
                </div> :
                <div><h1>Não logado</h1>
                <button onClick={this.entrar}>Entrar</button>
                </div>

               }
               <div>
                   <h2>Curso React Js</h2>
               </div>
                
            </div>
        );
    }
}

export default App;
