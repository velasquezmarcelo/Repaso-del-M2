import './App.css';
import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './Componentes/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      {/* <Route path={'/'} component={NavBar}/> */}
      {/* Dos formas de poner el NavBar */}
    </React.Fragment>
   
  );
}

export default App;
