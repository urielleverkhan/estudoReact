import React, {Component} from 'react';
import '../../estilo.css';
import {Link} from 'react-router-dom';



class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
           
        };

    }
    
    render(){
        return(
            <div className="container">
                Minha home
                <Link to="/Sobre">Ir Para Sobre</Link>
            
               
            </div>
        );
    }

}

export default Home;
