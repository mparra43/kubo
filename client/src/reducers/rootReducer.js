import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import {filmsReducer} from "./filmsReducer";



export const rootReducer = combineReducers({
    films:filmsReducer,
    auth: authReducer
})

