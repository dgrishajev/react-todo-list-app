import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import TodoTable from '../components/TodoTable/TodoTable';

const createTodo = (todo) => {
  this.props.actions.CreateTodo(todo);
};

const startEditing = (id) => {
  this.props.actions.StartEditing(id);
};

const cancelEditing = (id) => {
  this.props.actions.CancelEditing(id);
};

const editTodo = (todo) => {
  this.props.actions.UpdateTodo(todo);
};

const completeTodo = (todo) => {
  this.props.actions.UpdateTodo({ ...todo, status: 'done' });
};

const deleteTodo = (todo) => {
  this.props.actions.DeleteTodo(todo);
};

const TodoContainer = ({ todos }) => (
  <div className="todo-container">
    <TodoTable
      todos={todos}
      createTodo={createTodo}
      startEditing={startEditing}
      cancelEditing={cancelEditing}
      editTodo={editTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  </div>
);

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      statue: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
