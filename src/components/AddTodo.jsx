import React from "react";

class AddTodo extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      id: Math.random(),
      text: "",
      completed: false

    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new to do</label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder=" new to do"
          />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;