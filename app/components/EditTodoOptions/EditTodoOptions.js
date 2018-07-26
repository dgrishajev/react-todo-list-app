import React from 'react';
import PropTypes from 'prop-types';
import { Button, TableCell } from '@material-ui/core';

const EditOptions = (editTodo, cancelEdit) => {
  return (
    <TableCell>
      <Button color="green" onClick={editTodo}>
        Edit
      </Button>
      <Button color="blue" onClick={cancelEdit}>
        Cancel
      </Button>
    </TableCell>
  );
};

const AddOptions = (createTodo, resetTodo) => {
  return (
    <TableCell>
      <Button color="green" onClick={createTodo}>
        Create
      </Button>
      <Button color="blue" onClick={resetTodo}>
        Reset
      </Button>
    </TableCell>
  );
};

const Options = ({
  todo,
  createTodo,
  resetTodo,
  editTodo,
  cancelEdit,
}) => {
  if (todo && todo.editing) {
    return EditOptions(editTodo, cancelEdit);
  }
  return AddOptions(createTodo, resetTodo);
};

Options.propTypes = {
  editTodo: PropTypes.func,
  cancelEdit: PropTypes.func,
  createTodo: PropTypes.func.isRequired,
  resetTodo: PropTypes.func,
};

Options.defaultProps = {
  editTodo: null,
  cancelEdit: null,
  resetTodo: null,
};

export default Options;
