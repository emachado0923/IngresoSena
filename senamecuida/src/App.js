import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import decode from 'jwt-decode';
import Inicio from '../src/Views/Inicio';
import InicioS from './Views/Administracion/Auth/InicioS';
import Admin from '../src/Views/Administracion/administracion';
import Usuarios from '../src/Views/Administracion/usuarios';
import Seguridad from '../src/Views/Seguridad/Seguridad';
import Login from '../src/Views/Administracion/Auth/Login'
import LoginSeguridad from './Views/Seguridad/Auth/LoginSeguridad'

import { BrowserRouter, Route,Switch, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  let isValid = true
    try{
        isValid = decode(token);
    }catch(e){
        return false;
    }
  return isValid;

};

const MyRoute = (props)=>(
  isAuthenticated()
  ?<Route {...props} />
  :<Redirect to="/Login" />
)


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <MyRoute exact path='/Admin' component={Admin} />
        <MyRoute exact path='/Usuarios' component={Usuarios} />
        <MyRoute exact path='/Seguridad' component={Seguridad} />
        <Route exact path='/Inicio' component={InicioS} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/LoginSeguridad' component={LoginSeguridad} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
