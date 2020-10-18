import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Header from './Components/Header';

const Routes = () =>
{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;