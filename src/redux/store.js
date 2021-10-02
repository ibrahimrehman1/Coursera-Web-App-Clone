import { createStore, combineReducers } from "redux";
import { UserDataReducer, SubjectDataReducer, UserProfileDataReducer } from "./reducer";

export const store = createStore(
  combineReducers({ User: UserDataReducer, Subject: SubjectDataReducer, Profile: UserProfileDataReducer })
);
