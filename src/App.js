import './App.css';
import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './Componentes/NavBar';
import Home from './Componentes/Home';
import CreateUser from './Componentes/CreateUser';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      {/* <Route path={'/'} component={NavBar}/> */}
      {/* Dos formas de poner el NavBar */}
      {/* <Route path={'/home'} component={Home}/> */}
      {/* exact puede ir con router y navlink, cuando home no recibe ninguna prop puedo utilizar componet */}
      <Route path={'/home'}>
        <Home name={'Marcelo'} age={'25'} city={'Jujuy'}/>
      </Route>
      <Route path={'/create'} component={CreateUser}></Route>
    </React.Fragment>
   
  );
}

export default App;
