
import React, {Component} from 'react';
import './estilo.css';
import TodoList from './Components/TodoList';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
           
        };

    }
    
    render(){
        return(
            <div className="container">
               <h1>Lista de tarefas</h1>
               <TodoList />
               
            </div>
        );
    }

}

export default App;
