import axios from "axios";
import {
  TODO_ADD_FAIL,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_DELETE_SUCCESS,
  TODO_REQUEST_FAIL,
  TODO_REQUEST_INITIAL,
  TODO_REQUES_SUCCESS,
} from "./actionTypes";

//get all todos
export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_REQUEST_INITIAL });
    await axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        dispatch({ type: TODO_REQUES_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: TODO_REQUEST_FAIL, payload: "Sorry, No todo found" });
      });
  } catch (error) {
    console.log(error.message);
  }
};

//add todos
export const addTodos = (todo) => async (dispatch) => {
  try {
    dispatch({ type: TODO_ADD_REQUEST });
    await axios
      .post("http://localhost:5050/todos", { name: todo })
      .then((res) => {
        dispatch({ type: TODO_ADD_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: TODO_ADD_FAIL, payload: "Sorry, Todo Add Failed" });
      });
  } catch (error) {
    console.log(error.message);
  }
};

//delete todos
export const deleteTodos = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/todos/${id}`)
      .then((res) => {
        dispatch({ type: TODO_DELETE_SUCCESS, payload: id });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
};
