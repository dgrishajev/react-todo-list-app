import TodoApi from '../api/todoApi';
import {
  CREATE_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
  START_EDITING, CANCEL_EDITING,
  UPDATE_TODO, UPDATE_TODO_SUCCESS,
  DELETE_TODO, DELETE_TODO_SUCCESS,
} from './actionTypes';

export function CreateTodo(todo) {
  return (dispatch) => {
    return TodoApi.createTodo(todo).then((res) => {
      dispatch(CreateTodoSuccess(res.data.data));
    });
  };
}

export function CreateTodoSuccess(todo) {
  return {
    type: CREATE_TODO_SUCCESS,
    todo,
  };
}

export function GetTodos() {
  return (dispactch) => {
    return TodoApi.getTodo().then((res) => {
      dispactch(GetTodoSuccess(res));
    });
  };
}

export function GetTodoSuccess(todos) {
  return {
    type: GET_TODOS_SUCCESS,
    todos,
  };
}

export function StartEditing(_id) {
  return {
    type: START_EDITING,
    _id,
  };
}

export function CancelEditing(_id) {
  return {
    type: CANCEL_EDITING,
    _id,
  };
}

export function UpdateTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      todo,
    });
    TodoApi.updateTodo(todo).then((res) => {
      dispatch(UpdateTodoSuccess(res.data.data));
    });
  };
}

export function UpdateTodoSuccess(todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
    _id: todo._id,
  };
}

export function DeleteTodo(todo) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO,
      todo,
    });
    TodoApi.removeTodo(todo).then((res) => {
      if (res.status === 204) {
        dispatch(DeleteTodoSuccess(todo));
      }
    });
  };
}

export function DeleteTodoSuccess(todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    todo,
    _id: todo._id,
  };
}
