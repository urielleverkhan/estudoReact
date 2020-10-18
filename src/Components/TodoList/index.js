import React, {Component} from 'react';
import TodoItens  from '../TodoItens'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            tarefa: '',
            itens: []
        }
        this.adicionarItem = this.adicionarItem.bind(this);
        this.log = this.log.bind(this);
        this.deletItem = this.deletItem.bind(this);
    }
    adicionarItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem ={
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({itens: [...state.itens, newItem]});
        }

        e.preventDefault();
        this.setState({tarefa: ''});
    }
    log(){
        
        console.log(this.state.itens);
    }
    deletItem(key){
        console.log(key);
        let filtro = this.state.itens.filter((item) => {
            return(item.key !== key);
        });
        this.setState({itens: filtro});
    }
   
    render(){
        return(
            <div className="container">
               <form onSubmit={this.adicionarItem}>
                   <input type="text" placeholder="Nova Tarefa" name="tarefa" value={this.state.tarefa} onChange={(e) => {
                        this.setState({tarefa: e.target.value})
                   }} ref={(event) => this._tarefaInput = event}/>

                   <button type="submit">Adicionar</button>
                   
               </form>

               <button onClick={this.log}>Log</button>

               <TodoItens lista={this.state.itens} delete={this.deletItem}/>
               
            </div>
        );
    }

}

export default TodoList;
