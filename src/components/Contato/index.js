
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'




class Contato extends Component{
    
    render(){
        return(
            <div className="contato" id="contato">
                <h1>Meu contato</h1>
                <h3>Contato contato contato</h3>
                <h3>Contato contato contato</h3>
                <h3>Contato contato contato</h3>
                <Link smooth to="#inicio">Inicio</Link>
            </div>
        );
    }

}

export default Contato;