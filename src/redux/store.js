import {createStore, combineReducers} from "redux";
import {UserDataReducer, SubjectDataReducer} from "./reducer";

export const store = createStore(combineReducers({User: UserDataReducer, Subject: SubjectDataReducer}));