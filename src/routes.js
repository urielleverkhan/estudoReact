import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Componentes/Header';
import Erro from './Pages/Erro';
import Filme from './Pages/Filme';


const Routes = () =>
{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Filme/:id" component={Filme} />
              <Route pathc="/Filme/*" component={Erro}/>
              <Route pathc="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;