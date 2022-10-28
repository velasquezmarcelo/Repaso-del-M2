import React from "react";
import { createUser } from "../Actions";

export default function  CreateUser(){

    let [input, setInput] = React.useState ( {
        name: '',
        lastName: '',
        age: '',
        city: '',
    });
    //para no hacer una funcion para cada propiedad, hacemos una sola de la siguiente manera
    //usamos bracket notation, manejo de objeto
    let handleChange = (e) => {
        e.preventDefault(); //aqui esto no cambia nada
        console.log(e);
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))

    }
    //aqui trabajamos con actions y dispatch
    let dispatch = React.useDispatch();

    let handleSumit = (e) => {
        e.preventDefault();
        dispatch(createUser(input));  //{type: 'CREATE_USER', payload: input}
        console.log(input);
        setInput({name:'', lastName:'', age:'', city:''})
    }

    return(
        <React.Fragment>
            <div>CREATE USER</div>
            <br/>
            {/* Hacemos un formulario */}
            {/* label pone un tituo */}
            <form onSubmit={e => handleSumit(e)}>
                <div>
                    <label>Name</label>
                    <input type={'text'} name={'name'} value={input.name} 
                    onChange={(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label>Lastname</label>
                    <input type={'text'} name={'lastName'} value={input.lastName}
                    onChange={(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type={'text'} name={'age'} value={input.age} 
                    onChange={(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label>City</label>
                    <input type={'text'} name={'city'} value={input.city} 
                    onChange={(e)=> handleChange(e)}/>
                </div>
                <div>
                    <br/>
                    {/* reemplazar por un boton */}
                    <input type={'submit'} value={'CREATE'}/>
                </div>
                
            </form>
        </React.Fragment>
    )
}

//partes de redux -> actions, reducer, store

//podemos usar useDispatch o connect
//va adentro del primer return
// function mapDispatchToProps(dispatch) {
//     return {
//         createUser: (input) => dispatch (createUser(input));
//     }
// }
// export default connect (mapStateToProps:null, mapDispatchToProps) (CreateUser)
