import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoItemProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoItemProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write a todo'); // eslint-disable-line  no-alert
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  // todos: PropTypes.objectOf(PropTypes.object()).isRequired,
  // handleChangeProps: PropTypes.func.isRequired,
  // deleteTodoProps: PropTypes.func.isRequired,
  addTodoItemProps: PropTypes.func.isRequired,
};

export default InputTodo;
