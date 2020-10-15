import { render } from '@testing-library/react';
import React, {Component} from 'react';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            nome:"Naira",
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }
    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }
    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('Chegou a 0');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }
    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>

            </div>
        );
    }
}

export default App;