import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from '@material-ui/core';

const getClassName = todo => `
  ${todo.updating ? 'updating' : ''}
  ${todo.status === 'done' ? 'done' : ''}
  ${todo.deleting ? 'deleting' : ''}
`;

const TodoRow = ({
  todo,
  completeTodo,
  startEditing,
  deleteTodo,
}) => (
  <Table.Row className={getClassName(todo)}>
    <Table.Cell>
      {todo.title}
    </Table.Cell>
    <Table.Cell>
      {todo.description}
    </Table.Cell>
    <Table.Cell>
      {todo.date}
    </Table.Cell>
    <Table.Cell className="options">
      {
        todo.status !== 'done' && (
          <Button className="option-buttons" color="green" onClick={completeTodo}>
            <i className="fa fa-check" />
          </Button>
        )
      }
      <Button className="option-buttons" color="blue" onClick={startEditing}>
        <i className="fa fa-pencil" />
      </Button>
      <Button className="option-buttons" color="red" onClick={deleteTodo}>
        <i className="fa fa-trash" />
      </Button>
    </Table.Cell>
  </Table.Row>
);

TodoRow.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoRow;
