import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from '../src/Views/Inicio';
import Admin from '../src/Views/Administracion/administracion';
import Login from '../src/Views/Administracion/Auth/Login'

import { BrowserRouter, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
