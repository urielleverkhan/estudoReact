
import React, {Component} from 'react';
import './estilo.css';
////https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            nutri:[]
        };

    }
    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url).then((r) => r.json()).then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            //console.log(json);
        });

    }
    render(){
        return(
            <div className="container">
                <header>
                    <strong>
                        React Nutri
                    </strong>

                </header>

                {this.state.nutri.map((item) =>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <img src={item.capa} className="img"/>
                            <p className="subTitulo">{item.subtitulo}</p>
                            <a className="botao" href='#'>Veja Mais</a>
                        </article>                    
                        );
                })}
               
            </div>
        );
    }

}

export default App;
