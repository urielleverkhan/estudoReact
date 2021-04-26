
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'




class Header extends Component{
    
    render(){
        return(
            <header className="app" >
                <Link smooth to="#home">Home</Link>
                <Link smooth to="#inicio">Inicio</Link>
                <Link smooth to="#sobre">Sobre</Link>
                <Link smooth to="#contato">Contato</Link>
            </header>
        );
    }

}

export default Header;