
import React, {Component} from 'react';
import '../../estilo.css';
import {Link} from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
           
        };

    }
    
    render(){
        return(
            <div className="container">
               <h1>Header Meu projeto</h1><br/>
               <Link to="/Sobre">Ir para sobre</Link>
                <hr/>
               
            </div>
        );
    }

}

export default Header;
