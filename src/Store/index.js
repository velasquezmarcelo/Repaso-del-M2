import { legacy_createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../Reducer';
import thunk from 'react-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;