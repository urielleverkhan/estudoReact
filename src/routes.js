import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import Painel from './Pages/Painel';
import {autenticado} from './auth';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
       autenticado() ? (
            <Component {...props} /> ) : (<Redirect to={{pathname: '/', 
           state: {from: props.location}}} /> )
    )} />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/Painel" component={Painel} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;