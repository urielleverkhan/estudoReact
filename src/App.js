
import React, {Component} from 'react';
import './estilo.css';


class App extends Component{
    constructor (props){
        super(props);
        this.state = {
           numero: 0,
           txBotao: "Começar",
           corTimer: "timer",
           corCarregada: 'timer'
        };
        this.cores = ['corPreto', 'corBranco', 'corAzul', 'corAmarelo', 'corVerde', 'corVioleta', 'corLaranja',
    'corRoxo', 'corPink'];
        
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
        this.trocaCor = this.trocaCor.bind(this);
    }

  comecar(){
      let state = this.state;
      
      if(this.timer !== null){
          clearInterval(this.timer);
          this.timer = null;
          state.txBotao = 'Começar';
          if(state.numero > 3){
            state.corTimer = "timerFull";
                }else{
                    state.corTimer = state.corCarregada;
                }
      }else{
        this.timer = setInterval(() => {
            let state = this.state;
            state.numero += 0.1;
            if(state.numero > 3){
                state.corTimer = "timerFull";
                    }else{
                        state.corTimer = state.corCarregada;
                    } 
            if(state.numero > 5){
                this.limpar();
                state.txBotao = 'Começar';
                this.setState(state);
            }else{           
            this.setState(state);
            }
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
        state.corTimer = state.corCarregada;
        this.setState(state);
  }
  trocaCor(){
      let state = this.state;
      let numero = Math.floor(Math.random() * this.cores.length);
      if(state.corTimer === "timer"){
      state.corTimer = this.cores[numero];
      state.corCarregada = state.corTimer;
    }else{
        state.corTimer = "timer";
    }
      this.setState(state);
  }
    
    render(){
        return(
            <div className="container">
               <img src={require('./assets/cronometro.png')} className="img"/>
               <a className={this.state.corTimer}>{this.state.numero.toFixed(1)}</a>
               <div className="areaBtn">
                   <a className="botao" onClick={this.comecar}>{this.state.txBotao}</a>
                   <a className="botao" onClick={this.limpar}>Limpar</a>
               </div>
               <div className="trocaCor">
                   <a className="botao" onClick={this.trocaCor}>Trocar Cor</a>
               </div>
            </div>
        );
    }

}

export default App;
