import HttpClient from './httpClient';

const API = 'http://localhost:3000/api';

const TODO_API = `${API}/todos`;

const createTodo = todo => HttpClient.post(TODO_API, todo);

const getTodo = () => HttpClient.get(TODO_API);

const updateTodo = todo => HttpClient.put(TODO_API, todo);

const removeTodo = todo => HttpClient.delete(`${TODO_API}/${todo._id}`);

const TodoApi = {
  createTodo,
  getTodo,
  updateTodo,
  removeTodo,
};

export default TodoApi;
