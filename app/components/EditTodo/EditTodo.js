import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Input, TableRow, TableCell } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Options from '../EditTodoOptions/EditTodoOptions';

export class EditTodo extends React.Component {

  constructor({ todo }) {
    super();

    if (todo) {
      this.state = {
        ...todo,
      };
    } else {
      this.state = {
        ...this.emptyTodo(),
      };
    }
  }

  getDateForDatePicker() {
    const { date } = this.state;
    return moment(date);
  }

  emptyTodo = () => {
    return {
      title: '',
      description: '',
      date: moment(),
    };
  };

  changeNewTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  changeNewDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeNewDate = (event) => {
    this.setState({ date: event });
  };

  createTodo = () => {
    this.resetTodo();
    const { createTodo } = this.props;
    createTodo(this.state);
  };

  editTodo = () => {
    const { editTodo } = this.props;
    editTodo(this.state);
  };

  resetTodo = () => {
    this.setState({ title: '', description: '', date: moment() });
  };

  cancelEditing = () => {
    const { cancelEditing } = this.props;
    cancelEditing(this.state);
  };

  render() {

    const { title, description, todo } = this.state;

    return (
      <TableRow>

        <TableCell>

          <Input
            placeholder="Title"
            value={title}
            onChange={this.changeNewTitle}
          />
        </TableCell>

        <TableCell>
          <Input
            placeholder="Description"
            value={description}
            onChange={this.changeNewDescription}
          />
        </TableCell>

        <TableCell>

          <DatePicker
            selected={this.getDateForDatePicker()}
            onChange={this.changeNewDate}
          />
        </TableCell>

        <Options
          todo={todo}
          editTodo={this.editTodo}
          createTodo={this.createTodo}
          resetTodo={this.resetTodo}
          cancelEdit={this.cancelEditing}
        />

      </TableRow>
    );
  }

}

EditTodo.propTypes = {
  cancelEditing: PropTypes.func,
  editTodo: PropTypes.func,
  createTodo: PropTypes.func.isRequired,
};

EditTodo.defaultProps = {
  cancelEditing: null,
  editTodo: null,
};
