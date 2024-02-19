import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer, vgamesReducer }  from './reducer.js';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({userReducer, vgamesReducer}), composeWithDevTools(applyMiddleware(thunk)));

export default store;