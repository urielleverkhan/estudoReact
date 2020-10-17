
import React, {Component} from 'react';
import './estilo.css';


class App extends Component{
    constructor (props){
        super(props);
        this.state = {
           numero: 0,
           txBotao: "Começar"
        };
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

  comecar(){
      let state = this.state;

      if(this.timer !== null){
          clearInterval(this.timer);
          this.timer = null;
          state.txBotao = 'Começar';
      }else{
        this.timer = setInterval(() => {
            let state = this.state;
            state.numero += 0.1;
            this.setState(state);
        }, 100);
        state.txBotao = 'Parar';
    }
    this.setState(state);
  }  
  limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer =null;
        }
        let state = this.state;
        state.numero = 0;
        state.botao = 'Começar'
        this.setState(state);
  }
   
    
    render(){
        return(
            <div className="container">
               <img src={require('./assets/cronometro.png')} className="img"/>
               <a className="timer">{this.state.numero.toFixed(1)}</a>
               <div className="areaBtn">
                   <a className="botao" onClick={this.comecar}>{this.state.txBotao}</a>
                   <a className="botao" onClick={this.limpar}>Limpar</a>
               </div>
            </div>
        );
    }

}

export default App;
