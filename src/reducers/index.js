import { combineReducers } from "redux";
import heroes from "./hero.reducer";
import {reducer as formReducer} from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    heroes,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;
