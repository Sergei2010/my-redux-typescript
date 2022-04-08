import { useReduser } from './useReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({user:useReduser,})