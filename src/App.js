import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Membro from './componentes/membro/Membro.js'

class App extends Component{
 
 
    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
                
            </div>
        );
    }
}

export default App;
