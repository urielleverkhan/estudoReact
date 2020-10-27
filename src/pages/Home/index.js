
import React, {Component} from 'react';
import Inicio from '../../components/Inicio'
import Sobre from '../../components/Sobre'
import Contato from '../../components/Contato'
import '../../estilo.css';




class Home extends Component{
    
    render(){
        return(
            <div className="home">
                <Inicio/>
                <Sobre/>
                <Contato/>
            </div>
        );
    }

}

export default Home;