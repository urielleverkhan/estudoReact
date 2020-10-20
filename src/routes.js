import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Componentes/Header';


const Routes = () =>
{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;