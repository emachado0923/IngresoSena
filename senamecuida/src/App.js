import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import NavTopLanding from './Components/Navs/navTopLanding';
import {Title, SubTitle, Text} from './Components/common/Texts';
import { CardRol } from './Components/Cards/Card';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavTopLanding/>

      <Footer/>
    </div>
  );
}

export default App;
