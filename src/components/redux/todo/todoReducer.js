import {
  TODO_ADD_FAIL,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_DELETE_SUCCESS,
  TODO_REQUEST_FAIL,
  TODO_REQUEST_INITIAL,
  TODO_REQUES_SUCCESS,
} from "./actionTypes.js";
import { initialState } from "./initialStateTodo.js";

const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST_INITIAL:
      return {
        ...state,
        loading: true,
      };
    case TODO_REQUES_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    case TODO_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case TODO_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TODO_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload],
      };
    case TODO_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case TODO_DELETE_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((data) => data.id !== payload),
      };
    default:
      return state;
  }
};

export default TodoReducer;
