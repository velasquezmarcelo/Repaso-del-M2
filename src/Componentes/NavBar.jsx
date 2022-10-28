import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

//function component
export default function NavBar(){
    return(
        <React.Fragment>
            <nav>
              <ul>
                <li>
                    <NavLink to={'/home'}>Home</NavLink>
                </li>
                 <li>
                    <NavLink to={'/users'}>User</NavLink>
                </li>
                 <li>
                    <NavLink to={'/create'}>Create User</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
              </ul>
            </nav>
        </React.Fragment>
    )
}



//Crear componente
//Import react
//elegir class o function

//diferencia entre link y navlink, navlink le podemos dar estilos su esta activo mientras que a link no se le da estilo
//navlink tiene prop to y exact