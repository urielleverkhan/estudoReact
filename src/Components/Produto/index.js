import React, {Component} from 'react';
import '../../estilo.css';
import {Link} from 'react-router-dom';



class Produto extends Component{
    constructor(props){
        super(props);
        this.state ={
           id:''
        }

    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.setState({id: id});
        }
    render(){
        return(
            <div className="container">
                <h1>Produto {this.state.id}</h1>
                <Link to="/Sobre">Ir Para Sobre</Link>
            
               
            </div>
        );
    }

}

export default Produto;
