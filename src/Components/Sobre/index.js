import React, {Component} from 'react';
import '../../estilo.css';
import {Link} from 'react-router-dom';



class Sobre extends Component{
    constructor(props){
        super(props);
        this.state ={
           
        };

    }
    
    render(){
        return(
            <div className="container">
                Minha sobre
                <Link to="/">Ir Para Home</Link>
               
            </div>
        );
    }

}

export default Sobre;
