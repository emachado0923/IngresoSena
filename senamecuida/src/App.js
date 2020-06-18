import React from 'react';
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from '../src/Views/Inicio';
import Admin from '../src/Views/Administracion/administracion'

import { BrowserRouter, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Admin' component={Admin} />
        <Route path='/' component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
