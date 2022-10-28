const initialState = {
    users: []
};

//un reducer es una funcion
//importa el orden de los parametros
export default function rootReducer(state=initialState, action) {
    switch(action.type){
        case 'CREATE_USER':
            return {
                ...state, 
                users: [...state.users, action.payload]
                //users es un arreglo de objetos
            }
        default: return {...state}
    }
}