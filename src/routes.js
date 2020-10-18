import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Header from './Components/Header';
import Erro from './Components/Erro';
import Produto from './Components/Produto';


const Routes = () =>
{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Sobre" component={Sobre} />
                <Route path="/Produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;