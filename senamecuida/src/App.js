import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavTopLanding from './Components/Navs/navTopLanding';
import Inicio from '../src/Views/Inicio';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <NavTopLanding/>
        <Inicio/>
      <Footer/>
    </div>
  );
}

export default App;
