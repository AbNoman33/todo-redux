import { combineReducers } from "redux";
import TodoReducer from "./todo/todoReducer.js";

//create reducer
const rootReducer = combineReducers({
  todo: TodoReducer,
});

export default rootReducer;
