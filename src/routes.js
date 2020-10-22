import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Componentes/Header';
import Erro from './Pages/Erro'


const Routes = () =>
{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route pathc="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;