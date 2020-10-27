
import React, {Component} from 'react';
import {Container, Head, BemVindo} from './styles'



class App extends Component{
    
    render(){
        return(
            <Container>
               <Head> 
                   <a>Projeto Styled</a>
                </Head>

                <BemVindo cor="00ff00" tamanho="40px"> 
                    Bem vindo ao meu sistema
                </BemVindo>
 
            </Container>
        );
    }

}

export default App;


/*
<div className="Container">
    <header className="header">
        <a className="titulo"> Projeto Styled</a>
    </header>
             

    <h1> Bem vindo ao sistema</h1>
 
</div>
 */