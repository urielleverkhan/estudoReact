import React, {Component} from 'react';
import '../../estilo.css';
import {Link} from 'react-router-dom';



class Erro extends Component{
    constructor(props){
        super(props);
        this.state ={
           
        };

    }
    
    render(){
        return(
            <div className="container">
                <h3>Pagina não encontrada<br/></h3>
                <Link to="/">Home</Link><br/>
                <Link to="/sobre">Sobre</Link>
               
            </div>
        );
    }

}

export default Erro;
