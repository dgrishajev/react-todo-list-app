import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import TodoRow from '../TodoRow/TodoRow';
import { EditTodo } from '../EditTodo/EditTodo';

const TodoTable = ({
  todos,
  editTodo,
  cancelEditing,
  createTodo,
  completeTodo,
  startEditing,
  deleteTodo,
}) => (
  <Table celled>
    <TableHead>
      <TableRow>
        <TableCell>
          Title
        </TableCell>
        <TableCell>
          Description
        </TableCell>
        <TableCell>
          Date
        </TableCell>
        <TableCell>
          Options
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>

      {
        todos.map((todo) => {

          if (todo.editing) {
            return (
              <EditTodo
                editTodo={editTodo}
                cancelEditing={cancelEditing(todo._id)}
                key={todo._id}
                todo={todo}
              />
            );
          }

          return (
            <TodoRow
              todo={todo}
              key={todo._id}
              completeTodo={completeTodo(todo)}
              startEditing={startEditing(todo._id)}
              deleteTodo={deleteTodo(todo)}
            />
          );
        })
      }

      <EditTodo createTodo={createTodo} />

    </TableBody>

  </Table>
);

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  editTodo: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoTable;
