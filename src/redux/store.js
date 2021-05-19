import {createStore, combineReducers} from "redux";
import {UserDataReducer} from "./reducer";

export const store = createStore(combineReducers({User: UserDataReducer}));